import React from "react";
import "./style.scss";
import feespricing from "./imgs/feespricing.svg";
import reports from "./imgs/reports.svg";
import auditLogs from "./imgs/auditLogs.svg";
import briefcase from "./imgs/briefcase.svg";
import dashboard from "./imgs/home.svg";
import loanReq from "./imgs/loanReq.svg";
import savingProd from "./imgs/savingprod.svg";
import pigggy from "./imgs/piggy.svg";
import prefrences from "./imgs/preferences.svg";
import settlements from "./imgs/settlements.svg";
import transactions from "./imgs/transaction.svg";
import services from "./imgs/services.svg";
import whitelist from "./imgs/whitelist.svg";
import serviceAcc from "./imgs/serviceAcc.svg";
import guarantors from "./imgs/guarantors.svg";
import users from "./imgs/users.svg";
import userkarma from "./imgs/userkarma.svg";
import decisions from "./imgs/Vectordecision.svg";
import fees from "./imgs/fees.svg";
import loan from "./imgs/Vectorloan.svg";
import vector from "./imgs/vector.svg";
import avatar from "./imgs/image 4.png";
import dropDown from "./imgs/dropdown.svg";

interface SidebarItem {
  text: string;
  img: string;
}

const Sidebar: React.FC = () => {
  const customers: SidebarItem[] = [
    { text: "Users", img: users },
    { text: "Guarantors", img: guarantors },
    { text: "Loans", img: loan },
    { text: "Decision Models", img: decisions },
    { text: "Savings", img: pigggy },
    { text: "Loan Requests", img: loanReq },
    { text: "Whitelist", img: whitelist },
    { text: "Karma", img: userkarma },
  ];

  const businesses: SidebarItem[] = [
    { text: "Organisation", img: briefcase },
    { text: "Loan Product", img: loanReq },
    { text: "Savings Products", img: savingProd },
    { text: "Fees and Charges", img: fees },
    { text: "Transactions", img: transactions },
    { text: "Services", img: services },
    { text: "Service Account", img: serviceAcc },
    { text: "Settlements", img: settlements },
    { text: "Reports", img: reports },
  ];

  const settings: SidebarItem[] = [
    { text: "Prefrences", img: prefrences },
    { text: "Fees and Pricing", img: feespricing },
    { text: "Audit Logs", img: auditLogs },
  ];

  return (
    <div className="sidebar">
      <div className="mobile-utilities">
        <div className="avatar">
          <img src={avatar} alt="user" />
        </div>
        <div className="username">
          <p>Adedeji</p>
          <img src={dropDown} alt="drop" className="dropdown" />
        </div>
        <div className="searchbar">
          <input type="search" placeholder="Search for anything" />
        </div>
      </div>
      <div className="sidebar-top-container">
        <div className="sidebar-tab">
          <img src={briefcase} alt="Organisation" />
          Switch Organisation
          <img src={vector} alt="vectorImg" />
        </div>
        <div className="sidebar-tab">
          <img src={dashboard} alt="dashboard" />
          Dashboard
        </div>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-tab-header">CUSTOMERS</p>
        {customers.map((item, i) => (
          <div
            key={i}
            className={
              item.text === "Users" ? "sidebar-current-tab" : "sidebar-tab"
            }
          >
            <img src={item.img} alt={item.text} />
            {item.text}
          </div>
        ))}
      </div>
      <div className="sidebar-section">
        <p className="sidebar-tab-header">BUSINESSES</p>
        {businesses.map((item, i) => (
          <div key={i} className="sidebar-tab">
            <img src={item.img} alt={item.text} />
            {item.text}
          </div>
        ))}
      </div>
      <div className="sidebar-section">
        <p className="sidebar-tab-header">SETTINGS</p>
        {settings.map((item, i) => (
          <div key={i} className="sidebar-tab">
            <img src={item.img} alt={item.text} />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
