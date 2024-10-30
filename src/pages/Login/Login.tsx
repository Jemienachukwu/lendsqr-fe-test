import React, { useState } from "react";
import pablo from "./img/pablo-sign-in 1.png";
// import lendsqr from "../../images/lendsqr.png";
// import union from "../../images/Union.png";
import { Link } from "react-router-dom";

import "./style.scss";
const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <div className="login-logo">
        <svg
          width="174"
          height="36"
          viewBox="0 0 174 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2.66541C0 2.11304 0.443238 1.66525 0.99 1.66525H3.96C4.50676 1.66525 4.95 2.11304 4.95 2.66541V20.6682C4.95 21.2206 5.39324 21.6684 5.94 21.6684H18.81C19.3568 21.6684 19.8 21.2206 19.8 20.6682V17.6678C19.8 17.1154 19.3568 16.6676 18.81 16.6676H12.87C11.2297 16.6676 9.9 15.3243 9.9 13.6671V4.66573C9.9 3.00861 11.2297 1.66525 12.87 1.66525H21.78C23.4203 1.66525 24.75 3.00861 24.75 4.66573V23.6687C24.75 25.3258 23.4203 26.6692 21.78 26.6692H2.97C1.32971 26.6692 0 25.3258 0 23.6687V2.66541ZM19.8 7.6662C19.8 7.11383 19.3568 6.66604 18.81 6.66604H14.85V10.6667C14.85 11.219 15.2932 11.6668 15.84 11.6668H19.8V7.6662Z"
            fill="url(#paint0_linear_6819_58335)"
          />
          <path d="M35.325 0V27.8055H40.0894V0H35.325Z" fill="#213F7D" />
          <path
            d="M63.5388 19.7304C64.2869 11.6552 60.2313 7.59779 53.7344 7.59779C47.4344 7.59779 43.4181 11.8939 43.4181 17.8608C43.4181 24.1459 47.395 28.3227 54.0888 28.3227C57.0419 28.3227 60.3888 27.2884 62.4363 25.1403L59.365 22.0773C58.2625 23.2309 55.9394 23.9072 54.1675 23.9072C50.7813 23.9072 48.6944 22.1569 48.3794 19.7304H63.5388ZM48.4581 15.7127C49.1669 13.1669 51.2931 11.8939 53.8919 11.8939C56.6481 11.8939 58.6169 13.1669 58.9319 15.7127H48.4581Z"
            fill="#213F7D"
          />
          <path
            d="M86.3372 27.8055V17.5028C86.3372 11.337 82.6753 7.87624 78.1078 7.87624C75.6666 7.87624 73.6978 8.87072 71.7291 10.8199L71.4141 8.1547H67.1222V27.8055H71.8866V17.7812C71.8866 14.7978 73.8947 12.2917 76.8478 12.2917C79.9191 12.2917 81.5334 14.5591 81.5334 17.5425V27.8055H86.3372Z"
            fill="#213F7D"
          />
          <path
            d="M99.876 12.2519C102.908 12.2519 105.507 14.5591 105.507 17.9801C105.507 21.5204 102.908 23.7481 99.876 23.7481C96.8048 23.7481 94.3635 21.4011 94.3635 17.9801C94.3635 14.4398 96.8048 12.2519 99.876 12.2519ZM105.822 0V10.8597C104.68 8.83094 101.49 7.71713 99.4429 7.71713C93.7729 7.71713 89.5598 11.2177 89.5598 17.9801C89.5598 24.4243 93.8517 28.2431 99.561 28.2431C101.924 28.2431 104.325 27.4475 105.822 25.1006L106.137 27.8055H110.625V0H105.822Z"
            fill="#213F7D"
          />
          <path
            d="M130.162 10.2232C127.917 8.23425 125.634 7.63757 122.602 7.63757C119.058 7.63757 114.412 9.22873 114.412 13.7635C114.412 18.2188 118.782 19.5713 122.444 19.8497C125.201 20.0088 126.303 20.5657 126.303 21.9182C126.303 23.3503 124.61 24.305 122.799 24.2652C120.633 24.2254 117.483 23.0718 116.105 21.5204L113.742 24.9812C116.577 27.9646 119.649 28.4818 122.72 28.4818C128.272 28.4818 131.067 25.4983 131.067 22.0376C131.067 16.8265 126.421 15.9912 122.759 15.7525C120.279 15.5934 119.137 14.8773 119.137 13.6044C119.137 12.3713 120.397 11.6552 122.681 11.6552C124.531 11.6552 126.106 12.0928 127.484 13.4055L130.162 10.2232Z"
            fill="#213F7D"
          />
          <path
            d="M143.518 23.5889C140.25 23.5889 138.006 21.0829 138.006 18.0199C138.006 14.9569 140.053 12.4508 143.518 12.4508C146.983 12.4508 149.031 14.9569 149.031 18.0199C149.031 21.0829 146.786 23.5889 143.518 23.5889ZM154.268 36V8.19448H149.779L149.464 10.8994C147.968 8.7116 145.369 7.75691 143.164 7.75691C137.179 7.75691 133.202 12.2519 133.202 18.0199C133.202 23.7481 136.785 28.2829 143.006 28.2829C145.054 28.2829 148.086 27.6464 149.464 25.4983V36H154.268Z"
            fill="#213F7D"
          />
          <path
            d="M158.487 8.19448V27.8055H163.291V17.463C163.291 13.8431 165.614 12.4906 168.134 12.4906C169.709 12.4906 170.615 12.9282 171.599 13.7635L173.765 9.54696C172.702 8.47293 170.772 7.67735 168.764 7.67735C166.795 7.67735 164.787 8.03536 163.291 10.4619L162.937 8.19448H158.487Z"
            fill="#213F7D"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6819_58335"
              x1="-1.87183e-06"
              y1="38.9211"
              x2="26.2531"
              y2="-4.22382"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#213F7D" />
              <stop offset="1" stopColor="#39CDCC" />
            </linearGradient>
          </defs>
        </svg>
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
          <Link to="/dashboard" className="btn-container">
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
