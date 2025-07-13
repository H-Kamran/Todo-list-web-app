import "./Task.css";
import { API_ENDPOINTS } from "../../../../api/config.js";
import task_check from "../../../../assets/task_check.svg";
import check_sign from "../../../../assets/check_sign.svg";
import schedule from "../../../../assets/schedule.svg";
import { useState } from "react";

export default function Task({ id, title, desc, due_date, label }) {
  const [done, setDone] = useState(false);
  const [fade, setFade] = useState(false);
  const [destroyed, setDestroyed] = useState(false);

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
    setTimeout(() => setFade(true), 700);
    setTimeout(() => setDestroyed(true), 1400);
  };

  if (destroyed) return null;

  return (
    <>
      <div className={`task-card flex${fade ? " fadeaway" : ""}`}>
        <div
          className="check-container"
          onClick={handleCheck}
          style={{ cursor: "pointer" }}
        >
          <img src={task_check} className="w-5 mt-2" />
          <img src={check_sign} className={`w-5 mt-2 invisible absolute${done ? ' check_done' : ''}`} />
        </div>
        <div
          className="task-container text-left ml-2"
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
              <p className="task-label inline ml-3 text-sm opacity-70">label</p>
            )}
          </div>
        </div>
      </div>
      <hr className="mt-3" style={{ color: "var(--secondary-color-bg)" }} />
    </>
  );
}
