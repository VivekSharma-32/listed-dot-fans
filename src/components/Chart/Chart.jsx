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
import { Pie } from "react-chartjs-2";
import LineChart from "react-apexcharts";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

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
        borderWidth: 3,
        borderRadius: 5,
        data: [100, 420, 120, 430, 190, 220],
        fill: false,
        borderColor: "#9BDD7C",
        tension: 0.3,
      },
      {
        label: "My First Dataset",
        borderWidth: 3,
        borderRadius: 5,
        data: [200, 400, 200, 300, 210, 420],
        fill: false,
        borderColor: "#E9A0A0",
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
      {
        label: "My Second Dataset",
        data: [100, 150, 300],
        borderColor: "transparent",
        borderWidth: 0,
        backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
      },
    ],
  };

  const options = {
    xaxis: {
      categories: ["", "Week 1", "Week 2", "Week 3", "Week 4"],
    },
    stroke: {
      curve: "smooth",
    },
  };
  const series = [
    {
      name: "Guest",
      data: [200, 410, 180, 380, 120, 450],
      color: "#E9A0A0",
    },
    {
      name: "User",
      data: [100, 450, 120, 440, 150, 250],
      color: "#9BDD7C",
    },
  ];
  return (
    <div style={{ marginLeft: "20px" }}>
      <div className="lineChart">
        <div className="mb-3">
          <h3 className="fs-18">Activities</h3>
          <p className="text-light mt-3 fs-14">
            May - June 2021 <MdKeyboardArrowDown size={16} />
          </p>
        </div>
        <div>
          <LineChart
            options={options}
            series={series}
            type="line"
            width="1000"
            height="200"
          />
        </div>
      </div>
      <div className="chartContainer mb-30">
        <div className="leftBlock">
          <div className="chartHeader">
            <div className="text-dark fs-18">Top products</div>
            <div className="text-light fs-12 dropdownText">
              May - June 2021 <MdKeyboardArrowDown size={16} />
            </div>
          </div>
          <div className="chartBox">
            <div className="pieChart">
              <Pie
                style={{
                  clip: { left: 5, top: false, right: -2, bottom: 0 },
                  height: "120px",
                }}
                data={pieData}
              />
            </div>
            <div className="content">
              <div className="mb-3 d-flex">
                <div className="greenDot"></div>
                <div>
                  <h4 className="fs-14">Basic Tees</h4>
                  <p className="fs-12 text-light">55%</p>
                </div>
              </div>
              <div className="mb-3 d-flex">
                <div className="yellowDot"></div>
                <div>
                  <h4 className="fs-14">Custom Short Pants</h4>
                  <p className="fs-12 text-light">31%</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="redDot"></div>
                <div>
                  <h4 className="fs-14">Super Hoodies</h4>
                  <p className="fs-12 text-light">14%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightBlock">
          <div className="rightHeader">
            <div className="text-dark fs-18">Today’s schedule</div>
            <div className="text-light fs-12 dropdownText">
              See all
              <MdKeyboardArrowRight size={16} />
            </div>
          </div>
          <div className="contentBox">
            <div className="mb-3 d-flex">
              <div className="verticalBar lightGreen"></div>
              <div>
                <h4 className="location mb-1 fs-14">
                  Meeting with suppliers from Kuta Bali
                </h4>
                <p className="text-light mb-1 fs-12">14.00-15.00</p>
                <p className="text-light mb-1 fs-12">
                  at Sunset Road, Kuta, Bali{" "}
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="verticalBar lightPurple"></div>
              <div>
                <h4 className="location mb-1 fs-14">
                  Check operation at Giga Factory 1
                </h4>
                <p className="text-light mb-1 fs-12">18.00-20.00</p>
                <p className="text-light mb-1 fs-12">at Central Jakarta </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
