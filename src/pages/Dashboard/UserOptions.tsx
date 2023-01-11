import React from "react";
import "./style.scss";
import blackListimg from "./imgs/np_delete-friend_3248001_000000 1.png";
import viewUser from "./imgs/viewuser.png";
import activatUser from "./imgs/np_user_2995993_000000 1.png";
import { Link } from "react-router-dom";
const UserOptions = ({ id }: any) => {
  return (
    <>
      <div className="options">
        <Link to={`/dashboard/user/${id}`} className="option-item">
          <img src={viewUser} alt="view user" /> View Details
        </Link>
        <span className="option-item">
          <img src={blackListimg} alt="blacklist user" /> Blacklist User
        </span>
        <span className="option-item">
          <img src={activatUser} alt="Activate user" /> Activate User
        </span>
      </div>
    </>
  );
};

export default UserOptions;
