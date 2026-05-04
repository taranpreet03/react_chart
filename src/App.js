import './App.css';
import Area_Chart from './components/AreaChart';
import Bar_Chart, { AdvanceBar_Chart } from './components/BarChart';
import Line_Chart from './components/LineChart';

function App() {
  return (
    <>
    <Line_Chart/>
    <Bar_Chart/>
    <AdvanceBar_Chart />
    <Area_Chart/>
    </>
  );
}

export default App;