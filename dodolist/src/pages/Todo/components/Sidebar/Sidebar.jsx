import "./Sidebar.css";
import defaultPhoto from "../../../../assets/photo.jpg";
// import sidebar from "../../../../assets/sidebar.svg";

import projects from "../../../../data/projects.json";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => setOpen((prev) => !prev);
  return (
    <aside className={open ? '' : 'closed'}>
      <div className="aside-header">
        <div className="user-profile">
          <div className="user-photo">
            <img src={defaultPhoto} alt="photo" />
          </div>
          <div>
            <p className="user-text text-lg">User</p>
          </div>
        </div>
        {/* <img className="sidebar-icon" src={sidebar} alt="photo" /> */}
        <svg viewBox="0 0 512 512" width="24" height="24" onClick={toggleSidebar} className="cursor-pointer">
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill={open ? "var(--primary-color-c)" : "var(--secondary-color-c)"}
            stroke="none"
          >
            <path
              d="M1046 4464 c-185 -45 -347 -208 -391 -396 -22 -96 -22 -2922 0 -3017
35 -148 148 -289 285 -353 41 -20 99 -41 128 -47 37 -8 487 -11 1495 -11 1236
0 1451 2 1505 15 190 45 352 206 397 396 22 97 22 2921 0 3018 -45 190 -207
351 -397 396 -92 22 -2932 21 -3022 -1z m1299 -1904 l0 -1705 -620 0 -620 0
56 26 c-79 37 -131 88 -165 161 l-29 63 0 1455 0 1455 28 60 c15 33 42 75 60
93 36 38 108 78 164 91 21 5 308 8 638 8 l600 -2 0 -1705z m1678 1695 c103
27 167 -82 216 -185 l26 -55 0 -1455 0 -1455 -26 -55 c-37 -80 -81 -125 -157
162 l-67 -33 -727 -3 -728 -3 0 1711 0 1710 703 0 c590 0 712 -2 760 -15z"
            />
            <path
              d="M1118 3823 c-56 -35 -66 -117 -19 -164 l29 -29 472 0 472 0 29 29
c48 49 34 142 -26 169 -19 9 -148 12 -478 12 -403 -1 -455 -2 -479 -17z"
            />
            <path
              d="M1099 3381 c-49 -49 -36 -133 25 -166 27 -14 71 -16 383 -13 l351 3
26 24 c51 48 40 142 -20 170 -17 7 -140 11 -380 11 l-356 0 -29 -29z"
            />
            <path
              d="M1134 2976 c-41 -18 -64 -52 -64 -96 0 -45 23 -78 66 -96 49 -21 879
-21 928 0 43 18 66 51 66 96 0 45 -23 78 -66 96 -48 20 -884 20 -930 0z"
            />
            <path
              d="M1118 2543 c-56 -35 -66 -117 -19 -164 l29 -29 356 0 c240 0 363 4
380 11 60 28 71 122 20 170 l-26 24 -356 2 c-320 3 -360 1 -384 -14z"
            />
          </g>
        </svg>
      </div>
      <div className="navigation">
        <ul className="menu-list">
          <li className="list-item">
            <button type="button">
              <span className="material-symbols-outlined">all_inbox</span>
              <p>Inbox</p>
            </button>
            <span className="count">0</span>
          </li>
          <li className="list-item">
            <button type="button">
              <span className="material-symbols-outlined">today</span>
              <p>Today</p>
            </button>
            <span className="count">0</span>
          </li>
          <li className="list-item">
            <button type="button">
              <span className="material-symbols-outlined">date_range</span>
              <p>Upcoming</p>
            </button>
            <span className="count">0</span>
          </li>
          <li className="list-item">
            <button type="button">
              <span className="material-symbols-outlined">shoppingmode</span>
              <p>Label</p>
            </button>
            <span className="count">0</span>
          </li>
          <li className="list-item">
            <button type="button">
              <span className="material-symbols-outlined">delete</span>
              <p>Trash</p>
            </button>
            <span className="count">0</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="projects">
        <div className="title-container">
          <p className="title">Projects</p>
        </div>
        <ul className="projects-list navigation">
          {projects.map((project) => (
            <li key={project.id} className="list-item">
              <button type="button">
                <span className="material-symbols-outlined">work</span>
                <p>{project.name}</p>
              </button>
              <span className="count">0</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
