import Navbar from "../components/Navbar";
import Window from "../components/Window";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";

const trafficData = [
  { day: "Mon", traffic: 45 },
  { day: "Tue", traffic: 60 },
  { day: "Wed", traffic: 52 },
  { day: "Thu", traffic: 80 },
  { day: "Fri", traffic: 95 },
  { day: "Sat", traffic: 75 },
  { day: "Sun", traffic: 55 }
];

const eventData = [
  { name: "Sports", value: 35 },
  { name: "Concerts", value: 25 },
  { name: "Political", value: 20 },
  { name: "Festival", value: 15 },
  { name: "Others", value: 5 }
];

const priorityData = [
  { level: "Low", count: 18 },
  { level: "Medium", count: 42 },
  { level: "High", count: 27 }
];

const COLORS = [
  "#5DA5DA",
  "#FAA43A",
  "#60BD68",
  "#F17CB0",
  "#B2912F"
];

export default function Analytics() {
  return (
    <div className="dashboard-bg">
      <div className="app-window">

        <Navbar />

        <div className="content">

          <h1 className="page-title">
            📊 ANALYTICS DASHBOARD
          </h1>

          {/* KPI CARDS */}

          <div className="grid grid-cols-4 gap-6 mb-6">

            <Window title="Events Analyzed">
              <div className="text-center py-6">
                <h1 className="text-5xl font-bold">1247</h1>
              </div>
            </Window>

            <Window title="Traffic Impact">
              <div className="text-center py-6">
                <h1 className="text-5xl font-bold">68%</h1>
              </div>
            </Window>

            <Window title="Road Closures">
              <div className="text-center py-6">
                <h1 className="text-5xl font-bold">156</h1>
              </div>
            </Window>

            <Window title="High Priority">
              <div className="text-center py-6">
                <h1 className="text-5xl font-bold text-red-600">
                  342
                </h1>
              </div>
            </Window>

          </div>

          {/* CHARTS */}

          <div className="grid grid-cols-12 gap-6">

            <div className="col-span-7">

              <Window title="Weekly Traffic Trend">

                <LineChart
                  width={550}
                  height={300}
                  data={trafficData}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="traffic"
                    stroke="#ff7300"
                    strokeWidth={3}
                  />
                </LineChart>

              </Window>

            </div>

            <div className="col-span-5">

              <Window title="Event Distribution">

                <PieChart width={350} height={300}>
                  <Pie
                    data={eventData}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    dataKey="value"
                    label
                  >
                    {eventData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>

              </Window>

            </div>

            <div className="col-span-7">

              <Window title="Priority Breakdown">

                <BarChart
                  width={550}
                  height={280}
                  data={priorityData}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="level" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="count"
                    fill="#5DA5DA"
                  />
                </BarChart>

              </Window>

            </div>

            <div className="col-span-5">

              <Window title="AI Insights">

                <div className="space-y-4 text-lg">

                  <p>
                    🚦 Weekend sports events increase
                    congestion by ~42%.
                  </p>

                  <p>
                    👮 Deploy 18-22 officers in
                    ORR East corridor.
                  </p>

                  <p>
                    🚧 Whitefield shows the highest
                    closure frequency.
                  </p>

                  <p>
                    🤖 Model confidence: 92%
                  </p>

                </div>

              </Window>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}