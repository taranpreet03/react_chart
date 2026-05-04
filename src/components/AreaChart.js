import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  Area,
  Bar,
  Line,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,
  Brush,
  ZAxis,
  Label,
} from "recharts";

// data
const data = [
  { day: "Mon", created: 20, resolved: 95, pending: 50 },
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

// Advance
export const AdvanceArea_Chart = () => (
  <>
    <h2 className="chart-heading">Advanced Area Chart (Tickets Analytics)</h2>

    <ResponsiveContainer width="100%" aspect={3}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 400, left: 400, bottom: 20 }}
      >
        {/* AXIS */}
        <XAxis dataKey="day"></XAxis>

        <YAxis>
          <Label value="Tickets" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Legend />

        {/* REFERENCE LINE (SLA Target) */}
        <ReferenceLine y={150} stroke="blue" label="SLA Target" />

        {/* REFERENCE AREA (Highlight mid week) */}
        <ReferenceArea x1="Tue" x2="Thu" fill="lightgray" />

        {/* REFERENCE DOT (Peak pending) */}
        <ReferenceDot x="Sun" y={205} r={6} fill="black" label="Peak" />

        {/* MAIN AREAS */}
        <Area
          type="monotone"
          dataKey="resolved"
          stroke="#22c55e"
          fill="#22c55e"
          fillOpacity={0.3}
        />

        {/* EXTRA LAYERS */}
        <Line type="monotone" dataKey="created" stroke="red" />
        <Bar dataKey="pending" fill="#f59e0b" />
        {/* BRUSH  */}
        <Brush dataKey="day" height={30} stroke="#8884d8" />
      </ComposedChart>
    </ResponsiveContainer>
  </>
);
export default Area_Chart;
