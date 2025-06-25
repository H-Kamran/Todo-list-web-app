// import { Link } from "react-router-dom";
import "./Home.css";
import { Header } from "../../components/Header/Header.jsx";

export function Home() {
  return (
    <main className="home-container">
      <Header />
      <div className="main">
        <div className="hero">
          <h1>Empower Your Productivity</h1>
          <p>Your Tasks, Your Goals, Every Day!</p>
        </div>
        {/* <img
        className="hero__img"
        src="../hero_img.png"
        alt="Books, clocks, beautifull picture"
      /> */}
      </div>
    </main>
  );
}
