import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Delivered", value: 320 },
  { name: "In Transit", value: 210 },
  { name: "Pending", value: 150 },
  { name: "Failed", value: 60 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];
// const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
//   const RADIAN = Math.PI / 180;
//   const radius = innerRadius + (outerRadius - innerRadius) / 2;

//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor="middle"
//       dominantBaseline="central"
//       fontSize={12}
//       fontWeight="bold"
//     >
//       {(percent * 100).toFixed(0)}%
//     </text>
//   );
// };

function Pie_chart() {
  return (
    <>
      <h1 className="chart-heading">Logistics Load Distribution</h1>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            // label={renderLabel}
            label
            labelLine={true}
            stroke="none"     
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default Pie_chart;