import "./header.css";
import SearchIcon from "../../images/Search icon.svg";
import NotificationIcon from "../../images/bell-icon.svg";

const Header = () => {
  const photo = localStorage.getItem("photo");
  return (
    <div className="header">
      <div className="headerLogo">
        <h3>Dashboard</h3>
      </div>
      <div className="searchBox">
        <div className="searchInput">
          <input type="text" placeholder="Search..." />
          <img className="icons" src={SearchIcon} alt="search-icon" />
        </div>
        <div className="notification-icon">
          <img
            className="icons"
            src={NotificationIcon}
            alt="notification-icon"
          />
        </div>
        <div className="user">
          <img className="icons user-icon" src={photo} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
