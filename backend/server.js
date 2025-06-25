const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Database connection
const db = new sqlite3.Database("../db/todo.db"); // Relative to backend folder

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT 1,
  auth_provider TEXT DEFAULT 'local',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
)`);

db.run(`CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)`);

db.run(`CREATE TABLE IF NOT EXISTS labels (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  color TEXT,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)`);

db.run(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  desc TEXT,
  due_date TEXT,
  done BOOLEAN DEFAULT 0,
  priority INTEGER DEFAULT 0,
  user_id INTEGER NOT NULL,
  project_id INTEGER,
  label_id INTEGER,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE SET NULL,
  FOREIGN KEY (label_id) REFERENCES labels(id) ON DELETE SET NULL
)`);

db.run(`CREATE TABLE IF NOT EXISTS task_labels (
  task_id INTEGER,
  label_id INTEGER,
  PRIMARY KEY (task_id, label_id),
  FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
  FOREIGN KEY (label_id) REFERENCES labels(id) ON DELETE CASCADE
);`);

function seedDatabase() {
  // Check if users table is empty
  db.get("SELECT COUNT(*) AS count FROM users", (err, row) => {
    if (err) return console.error("Error checking users table:", err.message);
    if (row.count > 0) {
      console.log("🟡 Sample data already exists. Skipping seed.");
      return;
    }

    console.log("🌱 Seeding sample data...");

    // Insert sample user
    db.run(
      `
      INSERT INTO users (name, email, password_hash, avatar_url, auth_provider)
      VALUES ('Alice Doe', 'alice@example.com', 'hashed_password_123', 'https://example.com/avatar.png', 'local')
    `,
      function (err) {
        if (err) return console.error("Insert user failed:", err.message);
        const userId = this.lastID;

        // Insert project
        db.run(
          `
        INSERT INTO projects (name, user_id)
        VALUES ('Work Project', ?)
      `,
          [userId],
          function (err) {
            if (err)
              return console.error("Insert project failed:", err.message);
            const projectId = this.lastID;

            // Insert labels
            db.run(
              `
          INSERT INTO labels (name, color, user_id)
          VALUES ('Urgent', '#e74c3c', ?), ('Personal', '#3498db', ?)
        `,
              [userId, userId],
              function (err) {
                if (err)
                  return console.error("Insert labels failed:", err.message);

                // Insert task
                db.run(
                  `
            INSERT INTO tasks (title, desc, due_date, done, priority, user_id, project_id, label_id)
            VALUES (
              'Finish report',
              'Complete the financial report by Monday',
              '2025-06-30',
              0,
              2,
              ?,
              ?,
              1
            )
          `,
                  [userId, projectId],
                  function (err) {
                    if (err)
                      return console.error("Insert task failed:", err.message);
                    const taskId = this.lastID;

                    // Link to multiple labels
                    db.run(
                      `
              INSERT INTO task_labels (task_id, label_id)
              VALUES (?, 1), (?, 2)
            `,
                      [taskId, taskId],
                      (err) => {
                        if (err)
                          return console.error(
                            "Insert task_labels failed:",
                            err.message
                          );
                        console.log("✅ Sample data seeded successfully.");
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  });
}
// seedDatabase();

function insertSampleTasks() {
  // Get existing user to associate tasks with
  db.get("SELECT id FROM users LIMIT 1", (err, user) => {
    if (err || !user) return console.error("No user found:", err || "Empty users table");
    const userId = user.id;

    // Get one project for the user
    db.get("SELECT id FROM projects WHERE user_id = ? LIMIT 1", [userId], (err, project) => {
      const projectId = project ? project.id : null;

      // Get one label
      db.get("SELECT id FROM labels WHERE user_id = ? LIMIT 1", [userId], (err, label) => {
        const labelId = label ? label.id : null;

        // Define sample tasks
        const tasks = [
          {
            title: "Design landing page",
            desc: "Create the initial wireframes and design mockups.",
            due_date: "2025-07-01",
            done: false,
            priority: 2,
          },
          {
            title: "Fix login bug",
            desc: "Resolve the redirect issue after login.",
            due_date: "2025-06-30",
            done: false,
            priority: 3,
          },
          {
            title: "Email newsletter",
            desc: "Draft the monthly newsletter and send for approval.",
            due_date: "2025-07-02",
            done: true,
            priority: 1,
          },
        ];

        // Insert each task
        tasks.forEach((task) => {
          db.run(
            `INSERT INTO tasks (title, desc, due_date, done, priority, user_id, project_id, label_id)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [task.title, task.desc, task.due_date, task.done, task.priority, userId, projectId, labelId],
            function (err) {
              if (err) return console.error("Insert task failed:", err.message);
              console.log(`✅ Inserted task "${task.title}" with ID ${this.lastID}`);
            }
          );
        });
      });
    });
  });
}
// insertSampleTasks();

// Routes
app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  }); 
});

// app.post("/todos", (req, res) => {
//   const { task, done } = req.body;
//   db.run(
//     "INSERT INTO todos (task, done) VALUES (?, ?)",
//     [task, done],
//     function (err) {
//       if (err) return res.status(500).json({ error: err.message });
//       res.json({ id: this.lastID });
//     }
//   );
// });

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
