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
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(isValidEmail(value) ? "" : "Please enter a valid email.");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(
      isValidPassword(value)
        ? ""
        : "Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character."
    );
  };

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
              onChange={handleEmailChange}
            />
            {emailError && <p className="error-message">{emailError}</p>}
            <div className="password-container">
              <input
                type={showPassword}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {showPassword === "password" ? (
                <p
                  className="password-state"
                  onClick={() => setShowPassword("text")}
                >
                  SHOW
                </p>
              ) : (
                <p
                  className="password-state"
                  onClick={() => setShowPassword("password")}
                >
                  HIDE
                </p>
              )}
            </div>
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <p className="forgotPassword">FORGOT PASSWORD?</p>
          <Link
            to={
              isValidEmail(email) && isValidPassword(password)
                ? "/dashboard"
                : "#"
            }
            className="btn-container"
          >
            <button
              disabled={!isValidEmail(email) || !isValidPassword(password)}
              className={
                !isValidEmail(email) || !isValidPassword(password)
                  ? "disabledBtn"
                  : "activeBtn"
              }
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
