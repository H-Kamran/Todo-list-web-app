import { useEffect, useRef, useState } from "react";
import "./Registration.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export function Registration() {
  // const params = new URLSearchParams(location.search);
  // const [mode, setMode] = useState(params.get("mode"));
  // console.log(mode);

  const container = useRef();
  const addActiveClass = () => {
    container.current.classList.add("active");
  };
  const removeActiveClass = () => {
    container.current.classList.remove("active");
  };

  return (
    <main className="registration-container">
      <div
        ref={container}
        // className={`registration-forms-container ${
        //   mode === "start" ? "active" : ""
        // }`}
        className="registration-forms-container"
      >
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
                {/* <i classname="fa-brands fa-google-plus-g"></i> */}
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            {/* <span>or use your email for registeration</span> */}
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            {/* <span>or use your email password</span> */}
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button type="button">Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              {/* <p>Enter your personal details to use all of site features</p> */}
              <button type="button" onClick={removeActiveClass}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              {/* <p>
                Register with your personal details to use all of site features
              </p> */}
              <button type="button" onClick={addActiveClass}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
