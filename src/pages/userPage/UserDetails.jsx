import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.scss";
import Layout from "../../Layout";
import avatar from "./imgs/avatar.png";
import goBack from "./imgs/Vectorback.png";
import fullStar from "./imgs/Vectorfullstart.png";
import emptyStar from "./imgs/Vectoremptystar.png";

const UserDetails = () => {
  const [UserData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/2")
      .then((res) => {
        setUserData(res.data);
        console.log(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <div className="userDetails">
        <Link to="./" className="user-goback">
          <img src={goBack} alt="go back" /> Back to Users
        </Link>

        <header className="user-header">
          <h1 className="user-detailsText">User Details</h1>
          <div className="user-state">
            <button className="user-blacklist">Blacklist User</button>
            <button className="user-activatelist">Activate User</button>
          </div>
        </header>
        <div className="user-details">
          <div className="details-topContainer">
            <div className="user-profile">
              <img src={UserData?.profile?.avatar} alt="avatar" />
              <div className="profile-username">
                <h1>
                  {UserData?.profile?.firstName} {UserData?.profile?.lastName}
                </h1>
                <p>{UserData?.accountNumber}</p>
              </div>
            </div>

            <div className="user-tier">
              <p>user's tier</p>
              <span>
                <img src={fullStar} alt="full star" />
                <img src={fullStar} alt="full star" />
                <img src={emptyStar} alt="empty star" />
              </span>
            </div>
            <div className="user-balance">
              <h2>₦{UserData?.accountBalance}</h2>
              <p>{UserData?.profile?.bvn}</p>
            </div>
          </div>{" "}
          <ul className="user-nav">
            <li>General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loan</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
