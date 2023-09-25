import ChartBar from "./ChartBar";
import "./Chart.css";
import { DataPoint } from "../Expenses/ExpensesChart";

interface ChartProps {
  dataPoints: DataPoint[];
}

function Chart({ dataPoints }: ChartProps) {
  // transforming a data point to just a number
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  // spread operator pulls out all array elements and adds them as standalone args
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
					key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
