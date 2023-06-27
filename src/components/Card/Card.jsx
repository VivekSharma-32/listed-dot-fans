import "./card.css";
import RevenueIcon from "../../images/total-revenue.svg";
import TransactionIcon from "../../images/transaction-icon.svg";
import LikeIcon from "../../images/like.svg";
import PeopleIcon from "../../images/people.svg";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={RevenueIcon} alt="revenue-icon" />
        </div>
        <div className="card-body">
          <p>Total Revenues</p>
          <h3>$2,129,430</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={TransactionIcon} alt="revenue-icon" />
        </div>
        <div className="card-body">
          <p>Total Transactions</p>
          <h3>1,520</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={LikeIcon} alt="revenue-icon" />
        </div>
        <div className="card-body">
          <p>Total Likes</p>
          <h3>9,721</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <img src={PeopleIcon} alt="revenue-icon" />
        </div>
        <div className="card-body">
          <p>Total Users</p>
          <h3>892</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
