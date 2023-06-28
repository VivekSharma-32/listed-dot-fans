import "./sidebar.css";
import UserIcon from "../../images/user_icon.svg";
import DashboardIcon from "../../images/dashboard_icon.svg";
import ScheduleIcon from "../../images/schedule_icon.svg";
import SettingsIcon from "../../images/setting_icon.svg";
import TransactionIcon from "../../images/transaction_icon.svg";

const Sidebar = () => {
  return (
    <div className="navigationBar">
      <div className="logo">
        <h1>Board.</h1>
      </div>
      <div className="topbar">
        <ul>
          <li className="active">
            <img src={DashboardIcon} alt="dashboard-icon" /> Dashboard
          </li>
          <li>
            <img src={TransactionIcon} alt="transaction-icon" />
            Transactions
          </li>
          <li>
            <img src={ScheduleIcon} alt="schedule-icon" />
            Schedules
          </li>
          <li>
            <img src={UserIcon} alt="user-icon" />
            Users
          </li>
          <li>
            <img src={SettingsIcon} alt="setting-icon" />
            Settings
          </li>
        </ul>
      </div>
      <div className="bottombar">
        <ul>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
