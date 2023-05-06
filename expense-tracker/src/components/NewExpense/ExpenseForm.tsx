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
  // spread operator is used to make sure that the other values are copied into the new object so that it doesn't get lost.
  function titleChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    // react performs state updates periodically. With the below method we could be depending on an outdated snapshot and
    // copy the wrong values into the current state. The below approach with arrow funcs guarantees up-to-date snapshots.
    // setState({...state, title: event.target.value});
    setState((prevState: ExpenseFormState) => {
      return {...prevState, title: event.target.value};
    });
  }

  function amountChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setState((prevState: ExpenseFormState) => {
      return {...prevState, amount: parseFloat(event.target.value)};
    });
  }

  function dateChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setState((prevState: ExpenseFormState) => {
      return {...prevState, date: new Date(event.target.value)};
    });
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
