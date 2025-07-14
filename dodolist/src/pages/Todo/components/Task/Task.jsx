import "./Task.css";
import { API_ENDPOINTS } from "../../../../api/config.js";
// import task_check from "../../../../assets/task_check.svg";
import check_sign from "../../../../assets/check_sign.svg";
import schedule from "../../../../assets/schedule.svg";
import { useState } from "react";

export default function Task({ id, title, desc, due_date, label }) {
  const [done, setDone] = useState(false);
  const [destroyed, setDestroyed] = useState(false);
  const [editing, setEditing] = useState(false);

  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDesc, setTaskDesc] = useState(desc);

  const handleCheck = async () => {
    // try {
    //   // Update done status in backend
    //   await fetch(`${API_ENDPOINTS.tasks}/${id}`, {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ done: true }),
    //   });
    //   setDone(true);
    //   setTimeout(() => setFade(true), 700);
    //   setTimeout(() => setDestroyed(true), 1400);
    // } catch (err) {
    //   console.error("Failed to update task status", err);
    // }
    setDone(true);
    setTimeout(() => setDestroyed(true), 1000);
  };

  if (destroyed) return null;

  return (
    <>
      {!editing ? (
        <div
          className={`task-card flex justify-between items-center ${
            done ? " fadeaway" : ""
          }`}
        >
          <div className="task-check-container">
            <div
              className="check-container"
              onClick={handleCheck}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
                className="w-5 mt-2"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="var(--secondary-color-c)"
                  stroke="none"
                >
                  <path
                    d="M650 5105 c-337 -68 -587 -329 -639 -665 -9 -56 -11 -550 -9 -1925 3
2021 -1 -1859 58 -2017 66 -177 261 -372 438 -438 157 -59 2 -55 2062 -55
2060 0 1905 -4 2062 55 178 66 372 260 438 438 59 157 55 2 55 2062 0 1729 -1
1890 -17 1945 -29 106 -58 172 -107 247 -114 174 -261 279 -481 346 -50 16
208 17 -1925 19 -1515 1 -1882 -1 -1935 -12z m3842 -427 c91 -45 147 -103
191 -196 l32 -67 0 -1855 0 -1855 -32 -67 c-44 -93 -100 -151 -191 -196 l-76
-37 -1855 0 -1856 0 -67 32 c-93 44 -151 100 -196 191 l-37 76 0 1855 0 1856
32 67 c17 37 50 87 72 111 44 48 135 101 197 116 23 5 789 8 1875 8 l1835 -2
76 -37z"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 1280 1185"
                preserveAspectRatio="xMidYMid meet"
                className={`w-5 mt-2 absolute ${done ? "check_done" : ""}`}
                style={{ visibility: done ? "visible" : "hidden" }}
              >
                <g
                  transform="translate(0,1185) scale(0.1,-0.1)"
                  fill="var(--secondary-color-c)"
                  stroke="none"
                >
                  <path
                    d="M12525 11747 c-1052 -607 -2241 -1476 -3359 -2456 -901 -790 -1862
 -1742 -2752 -2726 -614 -680 -1276 -1471 -1874 -2240 -208 -268 -746 -986
 -915 -1223 -87 -122 -135 -181 -145 -178 -8 2 -769 430 -1690 950 l-1675 947
 -38 -43 c-20 -24 -42 -50 -47 -59 -9 -16 133 -182 3754 -4381 l291 -338 40 0
 40 0 227 453 c1121 2231 2222 4068 3471 5792 1377 1899 2936 3648 4690 5259
 125 115 227 212 227 216 0 5 -69 103 -82 116 -2 1 -75 -39 -163 -89z"
                  />
                </g>
              </svg>
            </div>
            <div
              className="task-content text-left ml-2"
              style={{ position: "relative" }}
            >
              <div className="relative size-fit">
                <h3 className="task-title text-lg font-bold">{title}</h3>
                {done && <span className="done-animation-line" />}
              </div>
              <p className="task-desc text-sm opacity-70">{desc}</p>
              <div className="task-details flex items-end">
                <div className="date-container ">
                  <img src={schedule} className="w-3.5 inline" />
                  <p className="date inline-block ml-1 text-sm opacity-70">
                    {due_date || "No date"}
                  </p>
                </div>
                {label && (
                  <p className="task-label inline ml-3 text-sm opacity-70">
                    label
                  </p>
                )}
              </div>
            </div>
          </div>
          <button
            className="edit-btn cursor-pointer"
            onClick={() => setEditing(true)}
          >
            <svg
              className="svg-icon"
              style={{
                width: "1.5em",
                height: "1.5em",
                fill: "var(--secondary-color-c)",
              }}
              viewBox="0 0 1024 1024"
            >
              <path d="M834.3 705.7c0 82.2-66.8 149-149 149H325.9c-82.2 0-149-66.8-149-149V346.4c0-82.2 66.8-149 149-149h129.8v-42.7H325.9c-105.7 0-191.7 86-191.7 191.7v359.3c0 105.7 86 191.7 191.7 191.7h359.3c105.7 0 191.7-86 191.7-191.7V575.9h-42.7v129.8z" />
              <path d="M889.7 163.4c-22.9-22.9-53-34.4-83.1-34.4s-60.1 11.5-83.1 34.4L312 574.9c-16.9 16.9-27.9 38.8-31.2 62.5l-19 132.8c-1.6 11.4 7.3 21.3 18.4 21.3 0.9 0 1.8-0.1 2.7-0.2l132.8-19c23.7-3.4 45.6-14.3 62.5-31.2l411.5-411.5c45.9-45.9 45.9-120.3 0-166.2zM362 585.3L710.3 237 816 342.8 467.8 691.1 362 585.3zM409.7 730l-101.1 14.4L323 643.3c1.4-9.5 4.8-18.7 9.9-26.7L436.3 720c-8 5.2-17.1 8.7-26.6 10z m449.8-430.7l-13.3 13.3-105.7-105.8 13.3-13.3c14.1-14.1 32.9-21.9 52.9-21.9s38.8 7.8 52.9 21.9c29.1 29.2 29.1 76.7-0.1 105.8z" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="task-card-edit">
          {/* Add your edit form or UI here */}
          <form className="edit-form border rounded-sm p-2 flex justify-between items-center">
            <div className="editing-area w-full">
              <input
                className="edit-task-title w-full text-lg font-bold rounded focus:outline-none"
                type="text"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)}
              />
              <input
                className="edit-task-title w-full text-sm rounded focus:outline-none"
                type="text"
                value={taskDesc}
                onChange={e => setTaskDesc(e.target.value)}
              />
            </div>
            <div className="edit-footer"></div>
          </form>
        </div>
      )}
      <hr className="mt-3" style={{ color: "var(--secondary-color-bg)" }} />
    </>
  );
}
