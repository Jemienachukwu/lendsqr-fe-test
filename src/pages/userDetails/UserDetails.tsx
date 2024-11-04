import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fullStar from "./imgs/Vectorfullstart.png";
import emptyStar from "./imgs/Vectoremptystar.png";
import avatar from "./imgs/avatar.svg";
import Layout from "../../components/layout/Layout";
import "./style.scss";

interface UserProfile {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  bvn?: string;
  gender?: string;
  maritalStatus?: string;
  children?: string;
  residence?: string;
}

interface UserEducation {
  level?: string;
  employmentStatus?: string;
  sector?: string;
  duration?: string;
  officeEmail?: string;
  monthlyIncome?: string[];
  loanRepayment?: string;
}

interface UserSocials {
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

interface UserGuarantor {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  relationship?: string;
}

interface UserData {
  id: string;
  accountNumber?: string;
  accountBalance?: string;
  phoneNumber?: string;
  email?: string;
  profile: UserProfile;
  education: UserEducation;
  socials: UserSocials;
  guarantor: UserGuarantor;
}

const useUserData = (userId: string) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(`user_${userId}`);
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, [userId]);

  return userData;
};

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const userData = useUserData(userId || "");

  const renderField = (label: string, value: string | undefined) => (
    <div className="user-data">
      <p>{label}</p>
      <p>{value || "N/A"}</p>
    </div>
  );

  const {
    profile = {},
    accountNumber = "N/A",
    accountBalance = "N/A",
    phoneNumber = "N/A",
    email = "N/A",
    education = {},
    socials = {},
    guarantor = {},
  } = userData || {
    profile: {},
    education: {},
    socials: {},
    guarantor: {},
  }; // Provide defaults for destructuring

  return (
    <Layout>
      <div className="userDetails">
        <Link to="/dashboard" className="goback-btn">
          <svg
            width="28"
            height="10"
            viewBox="0 0 28 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z"
              fill="#545F7D"
            />
          </svg>
          <span>Back to Users</span>
        </Link>

        <header className="user-header">
          <p className="header-text">User Details</p>
          <div className="user-condition">
            <button className="blacklist-user">
              <h3>Blacklist User</h3>
            </button>
            <button className="activate-user">
              <h3>Activate User</h3>
            </button>
          </div>
        </header>

        <div className="personal-details">
          <div className="personal-user-info">
            <div className="user-profile">
              <img src={avatar} alt="avatar" />
              <div className="profile-username">
                <h1>
                  {profile.firstName || "N/A"} {profile.lastName || "N/A"}
                </h1>
                <p>{accountNumber}</p>
              </div>
            </div>

            <div className="user-tier">
              <p>User's Tier</p>
              <span>
                <img src={fullStar} alt="full star" />
                <img src={fullStar} alt="full star" />
                <img src={emptyStar} alt="empty star" />
              </span>
            </div>

            <div className="user-balance">
              <h1>₦{accountBalance}</h1>
              <p>{profile.bvn || "N/A"}</p>
            </div>
          </div>
          <div className="user-nav">
            <ul>
              {[
                "General Details",
                "Documents",
                "Bank Details",
                "Loan",
                "Savings",
                "App and System",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <section className="user-Info">
          <h3>Personal Information</h3>
          <div className="userInfo">
            {renderField(
              "FULL NAME",
              `${profile.firstName || "N/A"} ${profile.lastName || "N/A"}`
            )}
            {renderField("PHONE NUMBER", phoneNumber)}
            {renderField("EMAIL ADDRESS", email)}
            {renderField("BVN", profile.bvn)}
            {renderField("GENDER", profile.gender)}
            {renderField("MARITAL STATUS", profile?.maritalStatus || "Single")}
            {renderField("CHILDREN", profile.children)}
            {renderField("Type of Residence", profile.residence)}
          </div>
          <hr />
          <h3>Education and Employment</h3>
          <div className="userInfo">
            {renderField("LEVEL OF EDUCATION", education.level)}
            {renderField("EMPLOYMENT STATUS", education.employmentStatus)}
            {renderField("SECTOR OF EMPLOYMENT", education.sector)}
            {renderField("DURATION OF EMPLOYMENT", education.duration)}
            {renderField("OFFICE EMAIL", education.officeEmail)}
            {renderField(
              "MONTHLY INCOME",
              education.monthlyIncome && education.monthlyIncome.length === 2
                ? `₦${education.monthlyIncome[0]} - ₦${education.monthlyIncome[1]}`
                : "N/A"
            )}
            {renderField("LOAN REPAYMENT", education.loanRepayment)}
          </div>
          <hr />
          <h3>Socials</h3>
          <div className="userInfo">
            {renderField("TWITTER", socials.twitter)}
            {renderField("FACEBOOK", socials.facebook)}
            {renderField("INSTAGRAM", socials.instagram)}
          </div>
          <hr />
          <h3>Guarantor</h3>
          <div className="userInfo">
            {renderField(
              "FULL NAME",
              `${guarantor.firstName || "N/A"} ${guarantor.lastName || "N/A"}`
            )}
            {renderField("PHONE NUMBER", guarantor.phoneNumber)}
            {renderField("EMAIL", guarantor.email)}
            {renderField("RELATIONSHIP", guarantor.relationship)}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default UserDetails;
