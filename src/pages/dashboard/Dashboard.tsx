import React, { useState, useEffect, CSSProperties } from "react";

import moment from "moment";
import totalusers from "./imgs/totaluser.svg";
import activeusers from "./imgs/activeusers.svg";
import userLoan from "./imgs/usersloan.svg";
import usersaving from "./imgs/usersavings.svg";
import ClipLoader from "react-spinners/ClipLoader";

import Layout from "../../components/layout/Layout";
import UserOptions from "./UserOptions";
import Filter from "../../components/filter/Filter";
import Pagination from "../../components/pagination/Pagination";
import "./style.scss";

interface User {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  lastActiveDate: string;
}

interface FilterData {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

interface UserInfo {
  img: string;
  title: string;
  number: string;
}

const override: CSSProperties = {
  display: "flex",
  margin: "10px auto",
  justifyContent: "center",
  alignItems: "center",
};

const Dashboard: React.FC = () => {
  const initialFilterData: FilterData = {
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  };

  const [filter, setFilter] = useState<boolean>(false);
  const [data, setData] = useState<User[]>([]);
  const [clickedIndex, setClickedIndex] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(10);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [filterData, setFilterData] = useState<FilterData>(initialFilterData);
  const [loading, setLoading] = useState<boolean>(true);

  const handleResetFilter = () => {
    setFilterData(initialFilterData);
    setFilteredData(data);
    setFilter((prev) => !prev);
  };
  const handleApplyFilter = (newFilterData: FilterData) => {
    setFilterData(newFilterData);
  };

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        setLoading(false);
        setData(res);
        setFilteredData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Error fetching data:", err);
      });
  }, []);
  const getUserStatus = (lastActiveDate: string) => {
    const lastActive = moment(lastActiveDate);
    const now = moment();
    const daysDifference = now.diff(lastActive, "days");

    if (daysDifference <= 7) {
      return { status: "Active", style: "active" };
    } else if (daysDifference <= 30) {
      return { status: "Pending", style: "pending" };
    } else if (daysDifference <= 90) {
      return { status: "Inactive", style: "inactive" };
    } else {
      return { status: "Blacklist", style: "blacklist" };
    }
  };
  useEffect(() => {
    const filtered = data.filter((user) => {
      return (
        (filterData.organization
          ? user.orgName.includes(filterData.organization)
          : true) &&
        (filterData.username
          ? user.userName.includes(filterData.username)
          : true) &&
        (filterData.email ? user.email.includes(filterData.email) : true) &&
        (filterData.phoneNumber
          ? user.phoneNumber.includes(filterData.phoneNumber)
          : true) &&
        (filterData.date
          ? moment(user.createdAt).isSame(filterData.date, "day")
          : true) &&
        (filterData.status
          ? getUserStatus(user.lastActiveDate).status === filterData.status
          : true)
      );
    });
    setFilteredData(filtered);
  }, [data, filterData]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const usersInfo: UserInfo[] = [
    { img: totalusers, title: "USERS", number: "2,453" },
    { img: activeusers, title: "ACTIVE USERS", number: "2,453" },
    { img: userLoan, title: "USERS WITH LOAN", number: "12,453" },
    { img: usersaving, title: "USERS WITH SAVINGS", number: "102,453" },
  ];
  const handleClick = (id: string) => () => {
    const clickedUser = data.find((user) => user.id === id);
    if (clickedUser) {
      localStorage.setItem(`user_${id}`, JSON.stringify(clickedUser));
    }

    setClickedIndex((prev) => (prev === id ? null : id));
  };
  return (
    <Layout>
      <div className="dashboard">
        <h2 className="header">Users</h2>

        <div className="dashboard-top-container">
          {usersInfo.map((item, i) => (
            <div className="users-details" key={i}>
              <img
                src={item.img}
                alt={item.title}
                className="users-details-Img"
              />
              <p className="users-details-title">{item.title}</p>
              <p className="users-details-data">{item.number}</p>
            </div>
          ))}
        </div>

        <div className="dashboard-table-container">
          <table className="dashboard-table">
            <thead className="dashboard-tableHeader">
              <tr className="tableHeader-row">
                {[
                  "ORGANIZATION",
                  "USERNAME",
                  "EMAIL",
                  "PHONE NUMBER",
                  "DATE JOINED",
                  "STATUS",
                ].map((header) => (
                  <th key={header}>
                    <span className="th-container">
                      {header}
                      <span
                        onClick={() => setFilter(!filter)}
                        className="filter-btn"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                            fill="#545F7D"
                          />
                        </svg>
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {loading === true && (
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      color: "#6c757d",
                    }}
                  >
                    <ClipLoader
                      // color={color}
                      loading={loading}
                      cssOverride={override}
                      size={50}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </td>
                </tr>
              )}
              {filter && (
                <tr className="filter-component">
                  <td>
                    <Filter
                      filterData={filterData}
                      setFilterData={setFilterData}
                      onApplyFilter={handleApplyFilter}
                      onResetFilter={handleResetFilter}
                      setFilter={setFilter}
                    />
                  </td>
                </tr>
              )}

              {currentPosts.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      color: "#6c757d",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                        style={{ color: "#6c757d" }}
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zm-5.442-9.344a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" />
                      </svg>
                      <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                        No matching records found
                      </span>
                    </div>
                  </td>
                </tr>
              ) : (
                currentPosts.map((user) => {
                  const { status, style } = getUserStatus(user.lastActiveDate);
                  return (
                    <tr key={user.id}>
                      <td>{user.orgName}</td>
                      <td>{user.userName}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{moment(user.createdAt).format("lll")}</td>
                      <td>
                        <div className={`dashboard-status ${style}`}>
                          {status}
                        </div>
                      </td>
                      <td className="status">
                        {clickedIndex === user.id && (
                          <div className="option">
                            <UserOptions id={user.id} />
                          </div>
                        )}
                      </td>
                      <td>
                        <span
                          onClick={handleClick(user.id)}
                          className="option-btn"
                          id="option-btn"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z"
                              fill="#545F7D"
                            />
                          </svg>
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredData.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPostPerPage={setPostsPerPage}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
