import React, { useState } from "react";
import pablo from "./img/pablo-sign-in 1.png";
import lendsqr from "../../images/lendsqr.png";
import union from "../../images/Union.png";

import "./style.scss";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div className="login-logo">
        <img src={union} alt="img" className="login-unionLogo" />
        <img src={lendsqr} alt="img" className="login-lendLogo" />
      </div>
      <div className="login-Container">
        <div className="login-imgContainer">
          <img src={pablo} alt="img" className="login-pabloImg" />
        </div>

        <form className="login-formContainer">
          <div className="text">
            <h2 className="login-welcomeText">Welcome!</h2>
            <p className="login-detailsText">Enter details to login.</p>
          </div>
          <div className="login-inputeContainer">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password-container">
              <input
                type={showPassword}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <>
                {showPassword === "password" ? (
                  <p onClick={() => setShowPassword("text")}>SHOW</p>
                ) : (
                  <p onClick={() => setShowPassword("password")}>Hide</p>
                )}
              </>
            </div>
          </div>
          <p className="forgotPassword">FORGOT PASSWORD ?</p>
          <Link to="/dashboard/users" className="btn-container">
            <button
              disabled={!email && !password}
              className={!email && !password ? "disabledBtn" : "activeBtn"}
            >
              LOG IN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
