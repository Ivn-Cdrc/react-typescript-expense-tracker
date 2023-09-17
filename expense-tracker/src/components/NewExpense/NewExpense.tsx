import ExpenseForm from "./ExpenseForm";
import { ExpenseFormData } from "./ExpenseForm";
import {v4 as uuidv4} from 'uuid';
import "./NewExpense.css";

export interface ExpenseFormDataWithId extends ExpenseFormData {
	id: string;
}

interface NewExpenseProps {
	onAddExpense: (expenseData: ExpenseFormDataWithId) => void;
}

function NewExpense({onAddExpense}: NewExpenseProps) {

	// we are executing this function inside ExpenseForm. This allows a child component(ExpenseForm) to communicate with the
	// parent component
	function saveExpenseDataHandler(enteredExpenseData: ExpenseFormData) {
		const expenseData: ExpenseFormDataWithId = {
			// pull out all the key value pairs and add to this new object
			...enteredExpenseData,
			id: uuidv4().toString()
		};
		
		onAddExpense(expenseData);
	};

  return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
}

export default NewExpense;
