import Card from "../Card/Card";
import Chart from "../Chart/Chart";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Card />
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
