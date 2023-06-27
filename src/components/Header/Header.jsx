import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLogo">
        <h3>Dashboard</h3>
      </div>
      <div className="right">
        <div className="searchBox">
          <input type="text" />
          <img src="search.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
