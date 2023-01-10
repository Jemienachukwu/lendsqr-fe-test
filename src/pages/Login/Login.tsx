import React, { useState } from "react";
import pablo from "./img/pablo-sign-in 1.png";
import lendsqr from "../../images/lendsqr.png";
import union from "../../images/Union.png";

import "./style.scss";
const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
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
            <input type="email" placeholder="Email" />
            <div className="password-container">
              <input type={showPassword} placeholder="Password" />
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
          <button>LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
