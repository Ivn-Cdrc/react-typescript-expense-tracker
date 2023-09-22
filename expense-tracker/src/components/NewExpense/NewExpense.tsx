import ExpenseForm from "./ExpenseForm";
import { ExpenseFormData } from "./ExpenseForm";
import {v4 as uuidv4} from 'uuid';
import { useState } from "react";
import "./NewExpense.css";

export interface ExpenseFormDataWithId extends ExpenseFormData {
	id: string;
}

interface NewExpenseProps {
	onAddExpense: (expenseData: ExpenseFormDataWithId) => void;
}

function NewExpense({onAddExpense}: NewExpenseProps) {
	const [isEditing, setIsEditing] = useState<boolean>(false);

	// we are executing this function inside ExpenseForm. This allows a child component(ExpenseForm) to communicate with the
	// parent component
	function saveExpenseDataHandler(enteredExpenseData: ExpenseFormData) {
		const expenseData: ExpenseFormDataWithId = {
			// pull out all the key value pairs and add to this new object
			...enteredExpenseData,
			id: uuidv4().toString()
		};
		
		// calling a function received through props. We are passing data to the function.
		// we are lifting the data to the app(parent) component
		onAddExpense(expenseData);
		setIsEditing(false);
	};

	function startEditingHandler() {
		setIsEditing(true);
	}

	function stopEditingHandler() {
		setIsEditing(false);
	}

  return (
		<div className="new-expense">
			{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
				onCancel={stopEditingHandler}/>}
		</div>
	);
}

export default NewExpense;
