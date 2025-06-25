import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logo__img" src="../logo.png" alt="Logo" />
      </div>
      <div className="header__menu">
        <div className="header__menu__left">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/">
            Tutorial
          </Link>
          <Link className="link" to="/">
            Pricing
          </Link>
          <Link className="link" to="/Todo">
            To-Do List
          </Link>
        </div>
        <div className="header__menu__right">
          <Link className="link" to="/Registration?mode=login">
            Login
          </Link>
          <Link className="link" to="/Registration?mode=start">
            Start for free
          </Link>
        </div>
      </div>
    </header>
  );
}
