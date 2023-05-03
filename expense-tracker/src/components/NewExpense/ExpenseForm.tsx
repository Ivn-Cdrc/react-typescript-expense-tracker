import { ChangeEvent } from "react";
import { useState } from "react";
import "./ExpenseForm.css";

interface ExpenseFormState {
  title: string;
  amount: number;
  date: Date;
}

function ExpenseForm() {
  const dateInputMax: string = new Date().toISOString().split("T")[0];

  const [state, setState] = useState<ExpenseFormState>({
    title: '',
    amount: 0,
    date: new Date()
  });

  // ChangeEvent type is a generic type. Here It listens to the value of our HTML input element from the text bar.
  // the value in event.target.value holds the value of the input
  function titleChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setState({...state, title: event.target.value});
    console.log(state.title);
  }

  function amountChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setState({...state, amount: parseFloat(event.target.value)});
    console.log(state.amount);
  }

  function dateChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setState({...state, date: new Date(event.target.value)});
    console.log(state.date);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max={dateInputMax} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
