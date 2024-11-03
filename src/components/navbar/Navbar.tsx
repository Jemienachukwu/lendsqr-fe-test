import "./style.scss";
import { Link } from "react-router-dom";
import avatar from "./imgs/image 4.png";
import notification from "./imgs/notification.svg";
import ham from "./imgs/ham.svg";
import logo from "./imgs/logo.svg";
import closebtn from "./imgs/closebtn.svg";

interface NavBarProps {
  showSide: boolean;
  setShowSide: (show: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ showSide, setShowSide }) => {
  return (
    <div className="navbar-main">
      <div className="logo-container">
        <div className="navbar-ham" onClick={() => setShowSide(!showSide)}>
          {showSide ? (
            <img src={ham} alt="ham-icon" />
          ) : (
            <img src={closebtn} alt="close-button-icon" />
          )}
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="navbar-utilities">
        <div className="navbar-search">
          <input type="search" placeholder="Search for anything" />
          <div className="navbar-searchIcon">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="utilities">
          <Link to="#" className="navbar-docs">
            Docs
          </Link>

          <img
            src={notification}
            alt="notification-icon"
            className="navbar-notificationIcon"
          />

          <span className="navbar-userDetailsWrapper">
            <img src={avatar} alt="user" className="navbar-userIcon" />

            <h3 className="navbar-userName">Adedeji</h3>
            <svg
              className="navbar-dropDown"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857C13.8188 8.48434 13.6852 8.182 13.1845 8.182H6.81567C6.31489 8.182 6.18363 8.48746 6.51723 8.857L9.39229 12.0516Z"
                fill="#213F7D"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
