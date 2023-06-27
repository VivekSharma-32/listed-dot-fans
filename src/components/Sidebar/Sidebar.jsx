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
            <img src={DashboardIcon} /> Dashboard
          </li>
          <li>
            <img src={TransactionIcon} />
            Transactions
          </li>
          <li>
            <img src={ScheduleIcon} />
            Schedules
          </li>
          <li>
            <img src={UserIcon} />
            Users
          </li>
          <li>
            <img src={SettingsIcon} />
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
