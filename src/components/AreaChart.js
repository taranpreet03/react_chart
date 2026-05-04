import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// data
const data = [
  { day: "Mon", created: 120, resolved: 95, pending: 25 },
  { day: "Tue", created: 150, resolved: 110, pending: 40 },
  { day: "Wed", created: 175, resolved: 140, pending: 35 },
  { day: "Thu", created: 170, resolved: 90, pending: 100 },
  { day: "Fri", created: 200, resolved: 115, pending: 25 },
  { day: "Sat", created: 140, resolved: 130, pending: 10 },
  { day: "Sun", created: 100, resolved: 110, pending: 200 },
];

function Area_Chart() {
  return (
    <>
      <h1 className="chart-heading">Area Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 400, left: 400, bottom: 10 }}
        >
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Area
            type="monotone"
            dataKey="created"
            stroke="#e24141"
            fill="#e24141"
            fillOpacity={0.4}
          />

          <Area
            type="monotone"
            dataKey="resolved"
            stroke="#22c55e"
            fill="#22c55e"
            fillOpacity={0.4}
          />

          <Area
            type="monotone"
            dataKey="pending"
            stroke="#f59e0b"
            fill="#f59e0b"
            fillOpacity={0.4}
          />
        </AreaChart>
      </ResponsiveContainer>

      
    </>
  );
}
export default Area_Chart;
