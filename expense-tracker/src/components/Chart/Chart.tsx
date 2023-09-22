import ChartBar from "./ChartBar";
import "./Chart.css";

interface ChartProps {
  dataPoints: any[];
}

function Chart({ dataPoints }: ChartProps) {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
					key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
