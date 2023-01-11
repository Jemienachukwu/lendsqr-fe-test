import React from "react";

import "./style.scss";
const Filter = () => {
  return (
    <div className="filter">
      <form>
        <div className="filter-inputes">
          <label>Organization</label>
          <select id="organization" name="organization">
            <option value="organization">Select</option>
            <option value="organization">organization</option>
            <option value="organization">organization</option>
          </select>
        </div>
        <div className="filter-inputes">
          <label>Username</label>
          <input id="username" type="text" name="username" placeholder="User" />
        </div>
        <div className="filter-inputes">
          <label>Email</label>
          <input id="Email" type="email" name="Email" placeholder="Email" />
        </div>
        <div className="filter-inputes">
          <label>Date</label>
          <input id="date" type="date" name="date" placeholder="Date" />
        </div>
        <div className="filter-inputes">
          <label>Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
          />
        </div>
        <div className="filter-inputes">
          <label>Status</label>
          <select id="Status" name="Status">
            <option value="Status">Select</option>
            <option value="Status">ACTIVE</option>
            <option value="Status">INACTIVE</option>
            <option value="Status">BLACKLIST</option>
          </select>
        </div>
        <div className="filter-buttonContainer">
          <button className="filter-resetBtn">Reset</button>
          <button className="filter-filterBtn">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
