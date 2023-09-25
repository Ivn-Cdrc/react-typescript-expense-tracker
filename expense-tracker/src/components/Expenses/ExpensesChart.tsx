import Chart from "../Chart/Chart";
import { Expense } from "../../App";

export interface DataPoint {
  label: string;
	value: number;
}

interface ExpensesChartProps {
	expenses: Expense[];
}

function ExpensesChart({expenses}: ExpensesChartProps) {
	const chartDataPoints: DataPoint[] = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 }
	];

	// use for ... of ... instead of for ... in ...
	// for ... in iterates over object keys, not the elements in an array
	for (const expense of expenses) {
		// using expense month as an index
		const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
		chartDataPoints[expenseMonth].value += expense.amount;
	}

	return (
		<Chart dataPoints={chartDataPoints}/>
	);
}

export default ExpensesChart;