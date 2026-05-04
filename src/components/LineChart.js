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
  Brush,
  Label,
  Scatter,
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
      <h1 className="chart-heading">Shipment Trends(LineChart)</h1>

      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={shipmentTrends}
          margin={{ top: 10, right: 400, left: 400, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="5 5" />

          {/* X Axis */}
          <XAxis dataKey="date" tickFormatter={(value=>value+"day")}>
            <Label position="insideBottom" offset={-5} />
          </XAxis>

          {/* Y Axis */}
          <YAxis>
            <Label
              value="Shipment Count"
              angle={-90}
              position="insideLeft"
            />
          </YAxis>

          <Tooltip />
          <Legend />

          {/* Reference Line (Target line) */}
          <ReferenceLine y={110} stroke="blue" label="Target" />

          {/* Highlight Area */}
          <ReferenceArea
            x1="Tues"
            x2="Thurs"
          />

          {/* Highlight specific point */}
          <ReferenceDot
            x="Fri"
            y={200}
            r={8}
            fill="black"
            stroke="none"
            // label="Peak"
          />

          {/* Lines */}
          <Line
            type="monotone"
            dataKey="created"
            stroke="#e24141"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{r:0}}
          />

          <Line
            type="monotone"
            dataKey="delivered"
            stroke="#1d8f35"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{r:0}}
          />
          
          {/* Scatter (extra visualization layer) */}
          <Scatter dataKey="peak" fill="black" />
          {/* Brush for zooming */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Line_Chart;