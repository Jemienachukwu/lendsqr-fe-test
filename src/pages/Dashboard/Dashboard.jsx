import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import "./style.scss";
import users from "./imgs/usericon.png";
import activeusers from "./imgs/iconactiveuser.png";
import userLoan from "./imgs/iconuserloan.png";
import usersaving from "./imgs/iconsavings.png";
import filterIcon from "./imgs/filter-results-button.png";
import dots from "./imgs/dots.png";
import axios from "axios";
import moment from "moment";
// import delUser from "./imgs/np_delete-friend_3248001_000000 1.png";
// import viewUser from "./imgs/viewuser.png";
// import activatUser from "./imgs/np_user_2995993_000000 1.png";
const Dashboard = () => {
  const item = [
    { img: users, title: "USERS", number: "2,453" },
    { img: activeusers, title: "ACTIVE USERS", number: "2,453" },
    { img: userLoan, title: "USERS WITH LOAN", number: "12,453" },
    { img: usersaving, title: "USERS WITH SAVINGS", number: "102,453" },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <div className="dashboard">
        <h2 className="header">Users</h2>
        <div className="dashboard-topContainer">
          {item.map((item, i) => (
            <div className="usersInfo" key={item.id}>
              <img
                src={item.img}
                alt={item.title}
                className="dashboard-userInfoImg"
              />
              <p className="usersInfo-title">{item.title}</p>
              <p className="usersNumber-data">{item.number}</p>
            </div>
          ))}
        </div>
        <div className="dashboard-tableContainer">
          <table className="dashboard-table">
            <thead className="dashboard-tableHeader">
              <tr className="dashboard-tableHeader-row">
                <th>
                  <p>ORGANIZATION</p> <img src={filterIcon} alt="img" />{" "}
                </th>

                <th>
                  <p>USERNAME</p> <img src={filterIcon} alt="img" />
                </th>
                <th>
                  <p>EMAIL</p> <img src={filterIcon} alt="img" />
                </th>
                <th>
                  <p>PHONE NUMBER </p> <img src={filterIcon} alt="img" />
                </th>
                <th>
                  <p>DATE JOINED</p>
                  <img src={filterIcon} alt="img" />
                </th>
                <th>
                  <p>STATUS</p>
                  <img src={filterIcon} alt="img" />
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((users, i) => (
                <tr key={i}>
                  <td>{users.orgName}</td>
                  <td>{users.userName}</td>
                  <td>{users.email}</td>
                  <td>{users.phoneNumber}</td>
                  <td> {moment(users.createdAt).format("lll")}</td>
                  <td className="status">
                    <div className="dashboard-status">inactive</div>
                    <img src={dots} alt="option" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="dashboard-pagination">
            <div className="current-page">
              Showing
              <div className="current-pageNumber">100</div>
              out of 100
            </div>
            <div className="paginationNum"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
