// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend
// } from "recharts";

// const data = [
//   { name: "Page A", uv: 4000, pv: 2400 },
//   { name: "Page B", uv: 3000, pv: 1398 },
//   { name: "Page C", uv: 2000, pv: 9800 },
//   { name: "Page D", uv: 2780, pv: 3908 },
//   { name: "Page E", uv: 1890, pv: 4800 },
//   { name: "Page F", uv: 2390, pv: 3800 },
//   { name: "Page G", uv: 3490, pv: 4300 },
// ];

// const Bar_Chart = () => (
//   <>
//     <h1 className="chart-heading">Bar Chart (UV vs PV)</h1>

//     <ResponsiveContainer width="100%" aspect={3}>
//       <BarChart
//         data={data}
//         margin={{ top: 10, right: 400, left: 400, bottom: 10 }}
//         barCategoryGap="20%"
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />

//         <Bar
//           dataKey="pv"
//           fill="#8884d8"
//           radius={[6, 6, 0, 0]}
//         />

//         <Bar
//           dataKey="uv"
//           fill="#82ca9d"
//           radius={[6, 6, 0, 0]}
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   </>
// );

// export default Bar_Chart;
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  Area,
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

const data = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
  { name: "Page F", uv: 2390, pv: 3800 },
  { name: "Page G", uv: 3490, pv: 4300 },
];

const Bar_Chart = () => (
  <>
    <h1 className="chart-heading">Advanced Composed Chart</h1>

    <ResponsiveContainer width="100%" aspect={3}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 400, left: 400, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name"/>
        <YAxis>
          <Label
            value="Values"
            angle={-90}
            position="insideLeft"
          />
        </YAxis>

        <Tooltip />
        <Legend />

        {/* Reference */}
        <ReferenceLine y={5000} stroke="blue" label="Target" />

        <ReferenceArea x1="Page B" x2="Page D" fill="lightgray" />

        <ReferenceDot x="Page C" y={9800} r={6} fill="black"  />

        {/* Chart Types */}
        <Area type="monotone" dataKey="uv" fill="#82ca9d" stroke="#82ca9d" />

        <Bar dataKey="pv" fill="#a59ac7" />

        {/* <Line type="monotone" dataKey="uv" stroke="red" strokeWidth={2} /> */}

        <Scatter dataKey="peak" fill="black" />

        <ZAxis range={[50, 200]} />

        <Brush dataKey="name" height={30} stroke="#8884d8" />
      </ComposedChart>
    </ResponsiveContainer>
  </>
);

export default Bar_Chart;