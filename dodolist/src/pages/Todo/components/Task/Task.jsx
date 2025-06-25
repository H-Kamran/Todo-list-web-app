import "./Task.css";
import task_check from "../../../../assets/task_check.svg";
import schedule from "../../../../assets/schedule.svg";

export default function Task({ title, desc, due_date, label }) {
  return (
    <>
      <div className="task-card flex ">
        <div className="check-container">
          <img src={task_check} className="w-5 mt-2" />
        </div>
        <div className="task-container text-left ml-2">
          <h3 className="task-title text-lg font-bold">{title}</h3>
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
