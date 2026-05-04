import './App.css';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

export const shipmentTrends = [
  { date: "Mon", created: 120, delivered: 95 },
  { date: "Tue", created: 150, delivered: 110 },
  { date: "Wed", created: 175, delivered: 140 },
  { date: "Thu", created: 170, delivered: 160 },
  { date: "Fri", created: 20, delivered: 175 },
  { date: "Sat", created: 140, delivered: 130 },
  { date: "Sun", created: 90, delivered: 85 },
];

function App() {
  return (
    <>
      <h1 className="chart-heading">Line Chart</h1>

      <ResponsiveContainer width="100%" aspect={5}>
        <LineChart data={shipmentTrends} width={300} height={300} margin={{top:5,right:300,left:300,bottom:5}}>
          <CartesianGrid strokeDasharray={"3 3"}/>
          <XAxis dataKey="date" />
          <YAxis />
          <Line
            type="monotone"
            dataKey="created"
            stroke="#4E67DD"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="delivered"
            stroke="#22C55E"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;