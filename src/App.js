import './App.css';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,Legend,Tooltip
} from 'recharts';

export const shipmentTrends = [
  { date: "Mon", created: 120, delivered: 95 },
  { date: "Tues", created: 150, delivered: 110 },
  { date: "Wednes", created: 175, delivered: 140 },
  { date: "Thurs", created: 170, delivered: 160 },
  { date: "Fri", created: 20, delivered: 175 },
  { date: "Satur", created: 140, delivered: 130 },
  { date: "Sun", created: 90, delivered: 85 },
];

function App() {
  return (
    <>
      <h1 className="chart-heading">Line Chart</h1>

      <ResponsiveContainer width="100%" aspect={5}>
        <LineChart data={shipmentTrends} width={300} height={300} margin={{top:5,right:300,left:300,bottom:5}}>
          <CartesianGrid strokeDasharray={"8 8"}/>
          <Legend/>
          <XAxis dataKey="date"  tickFormatter={(value=>value+"day")}/>
          <YAxis /><Tooltip/>
          <Line
            type="monotone"
            dataKey="created"
            stroke="#e24141"
            strokeWidth={3}
            activeDot={{r:9}}
          />

          <Line
            type="monotone"
            dataKey="delivered"
            stroke="#1d8f35"
            strokeWidth={3}
            activeDot={{r:9}}
          />

        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;