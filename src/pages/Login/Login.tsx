import React, { useState } from "react";
import pablo from "./imgs/pablo-sign-in 1.png";
import { Link } from "react-router-dom";
import "./style.scss";
import logo from "./imgs/logo.svg";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<"password" | "text">(
    "password"
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="login">
      <div className="login-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-Container">
        <div className="login-imgContainer">
          <img src={pablo} alt="Sign In" className="login-pabloImg" />
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
              {showPassword === "password" ? (
                <p onClick={() => setShowPassword("text")}>SHOW</p>
              ) : (
                <p onClick={() => setShowPassword("password")}>HIDE</p>
              )}
            </div>
          </div>
          <p className="forgotPassword">FORGOT PASSWORD?</p>
          <Link to="/dashboard" className="btn-container">
            <button
              disabled={!email || !password}
              className={!email || !password ? "disabledBtn" : "activeBtn"}
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
