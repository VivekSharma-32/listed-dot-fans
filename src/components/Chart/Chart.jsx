import "./chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

const Chart = () => {
  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        borderWidth: 1,
        borderRadius: 5,
        data: [0, 100, 200, 300, 400, 500],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.7,
      },
    ],
  };

  const pieData = {
    // labels: ["Basic Tees", "Custon ", "#98D89E"],
    datasets: [
      {
        label: "My First Dataset",
        data: [100, 150, 300],
        borderColor: "transparent",
        borderWidth: 0,
        backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
      },
    ],
  };
  const options = {};
  return (
    <div style={{ marginLeft: "20px" }}>
      {/* <Line title="Activity" options={options} data={data} /> */}
      <div className="chartContainer">
        <div className="leftBlock">
          <div className="pieChart">
            <Pie
              style={{ clip: { left: 5, top: false, right: -2, bottom: 0 } }}
              data={pieData}
            />
          </div>
          <div className="content">
            <div>
              <p>Basic Tees</p>
              <p>55%</p>
            </div>
            <div>
              <p>Custom Short Pants</p>
              <p>31%</p>
            </div>
            <div>
              <p>Super Hoodies</p>
              <p>14%</p>
            </div>
          </div>
        </div>
        <div className="rightBlock">
          <div className="chartHead">
            <div className="leftHead">
              <h5>Today's schedule</h5>
            </div>
            <div className="rightHead">
              <a href="">See All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
