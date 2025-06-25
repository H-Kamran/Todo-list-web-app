import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TaskPage from "./components/TaskPage/TaskPage.jsx";

export default function Todo() {
  return (
    <div className="flex h-screen font-sans">
      <Sidebar />
      <TaskPage />
    </div>
  );
}
