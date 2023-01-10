import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import "./style.scss";
import users from "./imgs/usericon.png";
import activeusers from "./imgs/iconactiveuser.png";
import userLoan from "./imgs/iconuserloan.png";
import usersaving from "./imgs/iconsavings.png";
import filterIcon from "./imgs/filter-results-button.png";
import dots from "./imgs/dots.png";
import axios from "axios";
import moment from "moment";
import Filter from "../../components/filter/Filter";
import UserOptions from "./UserOptions";
import Pagination from "../../components/pagination/Pagination";

const Dashboard = () => {
  const item = [
    { img: users, title: "USERS", number: "2,453" },
    { img: activeusers, title: "ACTIVE USERS", number: "2,453" },
    { img: userLoan, title: "USERS WITH LOAN", number: "12,453" },
    { img: usersaving, title: "USERS WITH SAVINGS", number: "102,453" },
  ];
  const [filter, setFilter] = useState(false);
  const [data, setData] = useState([]);

  const [clickedIndex, setClickedIndex] = useState<any>({});

  const handleClick = (id: any) => () => {
    setClickedIndex((state: any) => ({
      ...state,
      [id]: !state[id],
    }));
  };
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (item: number) => setCurrentPage(item);
  return (
    <Layout>
      <div className="dashboard">
        <h2 className="header">Users</h2>
        <div className="dashboard-topContainer">
          {item.map((item, i) => (
            <div className="usersInfo" key={i}>
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
              <tr className="tableHeader-row">
                <th>
                  ORGANIZATION
                  <img
                    src={filterIcon}
                    alt="img"
                    onClick={() => {
                      setFilter(!filter);
                    }}
                  />{" "}
                </th>

                <th>
                  USERNAME
                  <img
                    src={filterIcon}
                    alt="img"
                    onClick={() => {
                      setFilter(!filter);
                    }}
                  />
                </th>
                <th>
                  EMAIL
                  <img
                    src={filterIcon}
                    alt="img"
                    onClick={() => {
                      setFilter(!filter);
                    }}
                  />
                </th>
                <th>
                  PHONE NUMBER
                  <img
                    src={filterIcon}
                    alt="img"
                    onClick={() => {
                      setFilter(!filter);
                    }}
                  />
                </th>
                <th>
                  DATE JOINED
                  <img
                    src={filterIcon}
                    alt="img"
                    onClick={() => {
                      setFilter(!filter);
                    }}
                  />
                </th>
                <th>
                  STATUS
                  <img
                    src={filterIcon}
                    alt="img"
                    onClick={() => {
                      setFilter(!filter);
                    }}
                  />
                </th>
              </tr>
            </thead>

            {filter ? (
              <div className="filterComponent">
                <Filter />
              </div>
            ) : null}
            <tbody>
              {currentPost?.map((users: any, i) => (
                <tr key={i}>
                  <td>{users?.orgName}</td>
                  <td>{users.userName}</td>
                  <td>{users.email}</td>
                  <td>{users.phoneNumber}</td>
                  <td> {moment(users.createdAt).format("lll")}</td>
                  <td className="status">
                    <div className="dashboard-status">inactive</div>
                    {clickedIndex[users.id] && (
                      <div className="option">
                        <UserOptions id={users.id} />
                      </div>
                    )}
                    <img
                      src={dots}
                      alt="option"
                      onClick={handleClick(users.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPostPerPage={setPostPerPage}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
