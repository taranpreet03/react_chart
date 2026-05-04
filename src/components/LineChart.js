import { 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
  Label,
} from 'recharts';

export const shipmentTrends = [
  { date: "Mon", created: 120, delivered: 95 },
  { date: "Tues", created: 150, delivered: 110 },
  { date: "Wednes", created: 175, delivered: 140 },
  { date: "Thurs", created: 170, delivered: 160 },
  { date: "Fri", created: 200, delivered: 175 },
  { date: "Satur", created: 140, delivered: 130 },
  { date: "Sun", created: 90, delivered: 85 },
];

function Line_Chart() {
  return (
    <>
      

      {/*  Mini Chart with Axis */}
      <h1 className="chart-heading">SparkLine</h1>
      <div style={{ width: "50%", height: "160px", marginBottom: "20px" ,marginLeft:"400px"}}>
        <ResponsiveContainer>
          <LineChart data={shipmentTrends}>
            
            <XAxis dataKey="date" />
            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="created"
              stroke="#e24141"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/*  Main Chart */}
      <h1 className="chart-heading">Shipment Trends(LineChart)</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={shipmentTrends}
          margin={{ top: 10, right: 400, left: 400, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="5 5" />

          <XAxis dataKey="date" tickFormatter={(value)=> value + " day"}>
            <Label position="insideBottom" offset={-5} />
          </XAxis>

          <YAxis>
            <Label value="Shipment Count" angle={-90} position="insideLeft" />
          </YAxis>

          <Tooltip />
          <Legend />

          <ReferenceLine y={110} stroke="blue" label="Target" />

          <ReferenceArea x1="Tues" x2="Thurs" />

          <ReferenceDot x="Fri" y={200} r={8} fill="black" />

          <Line
            type="monotone"
            dataKey="created"
            stroke="#e24141"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="delivered"
            stroke="#1d8f35"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Line_Chart;