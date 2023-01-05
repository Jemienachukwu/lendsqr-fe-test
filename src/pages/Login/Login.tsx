import pablo from "./img/pablo-sign-in 1.png";
import lendsqr from "../../images/lendsqr.png";
import union from "../../images/Union.png";

import "./style.scss";
const Login = () => {
  return (
    <div className="Login-main">
      <div className="Login-logo">
        <img src={union} alt="img" className="Login-unionLogo" />
        <img src={lendsqr} alt="img" className="Login-lendLogo" />
      </div>
      <div className="Login-Container">
        <div className="Login-imgContainer">
          <div className="Login-pabloImgContainer">
            <img src={pablo} alt="img" className="Login-pabloImg" />
          </div>
        </div>
        <div className="Login-formContainer">
          <form>
            <h2 className="Login-welcomeText">Welcome!</h2>
            <p className="Login-detailsText">Enter details to login.</p>
            <span className="Login-inputeContainer">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </span>
            <p className="forgotPassword">FORGOT PASSWORD ?</p>
            <button>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
