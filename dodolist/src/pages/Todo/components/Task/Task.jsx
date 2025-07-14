import "./Task.css";
import { API_ENDPOINTS } from "../../../../api/config.js";
// import task_check from "../../../../assets/task_check.svg";
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
    setTimeout(() => setDestroyed(true), 1000);
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
