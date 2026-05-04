import './App.css';
import Area_Chart,{AdvanceArea_Chart} from './components/AreaChart';
import Bar_Chart, { AdvanceBar_Chart } from './components/BarChart';
import Line_Chart from './components/LineChart';
import Pie_chart from './components/PieChart';

function App() {
  return (
    <>
    <Line_Chart/>
    <Bar_Chart/>
    <AdvanceBar_Chart />
    <Area_Chart/>
    <AdvanceArea_Chart/>
    <Pie_chart/>
    </>
)}
export default App;