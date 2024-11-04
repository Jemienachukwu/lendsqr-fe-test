import React, { useState } from "react";
import "./style.scss";

interface FilterProps {
  filterData: FilterData;
  setFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
  onResetFilter: () => void;
  onApplyFilter: (filterData: FilterData) => void;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
}
interface FilterData {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

const Filter: React.FC<FilterProps> = ({
  filterData,
  onApplyFilter,
  setFilterData,
  onResetFilter,
  setFilter,
}) => {
  const [formData, setFormData] = useState<FilterData>({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onApplyFilter(formData);
    setFilter((prev) => !prev);
    setFormData({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
  };

  return (
    <div className="filter">
      <form onSubmit={handleSubmit}>
        <div className="filter-inputes">
          <label>Organization</label>
          <input
            id="organization"
            type="text"
            name="organization"
            className="organization"
            placeholder="organization"
            value={formData.organization}
            onChange={handleChange}
          />
        </div>
        <div className="filter-inputes">
          <label>Username</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="User"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="filter-inputes">
          <label>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="filter-inputes">
          <label>Date</label>
          <input
            id="date"
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="filter-inputes">
          <label>Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="filter-inputes">
          <label>Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            <option value="pending">pending</option>
            <option value="blacklist">blacklist</option>
          </select>
        </div>
        <div className="filter-buttonContainer">
          <button
            type="button"
            className="filter-resetBtn"
            onClick={onResetFilter}
          >
            Reset
          </button>
          <button type="submit" className="filter-filterBtn">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
