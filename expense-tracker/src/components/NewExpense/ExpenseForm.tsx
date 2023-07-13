import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import "./ExpenseForm.css";

// interface ExpenseFormState {
//   title: string;
//   amount: number;
//   date: Date;
// }

function ExpenseForm() {
  const dateInputMax: string = new Date().toISOString().split("T")[0];

  // Use this if we are planning on using one state to store multiple state attributes
  // const [state, setState] = useState<ExpenseFormState>({
  //   title: '',
  //   amount: 0,
  //   date: new Date()
  // });

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());

  function titleChangeHandlerTest(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function amountChangeHandlerTest(event: ChangeEvent<HTMLInputElement>) {
    setAmount(parseFloat(event.target.value));
  }

  function dateChangeHandlerTest(event: ChangeEvent<HTMLInputElement>) {
    setDate(new Date(event.target.value));
  }

  // ChangeEvent type is a generic type. Here It listens to the value of our HTML input element from the text bar.
  // the value in event.target.value holds the value of the input
  // spread operator is used to make sure that the other values are copied into the new object so that it doesn't get lost.
  // function titleChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    // react performs state updates periodically. With the below method we could be depending on an outdated snapshot and
    // copy the wrong values into the current state. The below approach with arrow funcs guarantees up-to-date snapshots.
    // setState({...state, title: event.target.value});
    // setState((prevState: ExpenseFormState) => {
    //   return {...prevState, title: event.target.value};
    // });
  // }

  // function amountChangeHandler(event: ChangeEvent<HTMLInputElement>) {
  //   setState((prevState: ExpenseFormState) => {
  //     return {...prevState, amount: parseFloat(event.target.value)};
  //   });
  // }

  // function dateChangeHandler(event: ChangeEvent<HTMLInputElement>) {
  //   setState((prevState: ExpenseFormState) => {
  //     return {...prevState, date: new Date(event.target.value)};
  //   });
  // }

  // when a submit button is pressed, the form will listen to the submit even and trigger this function
  function submitHandler(event: FormEvent<HTMLFormElement>) {
    // prevents the default of this request being sent
    event.preventDefault();
    
    // submit the state handlers somewhere
    console.log(title);
    console.log(amount);
    console.log(date);

    // resets the state
    // setState({
    //   title: '',
    //   amount: 0,
    //   date: new Date()
    // });

    setTitle('');
    setAmount(0);
    setDate(new Date());
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={title}
            onChange={titleChangeHandlerTest}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number" 
            min="0.01" 
            step="0.01"
            value={amount.toString()}
            onChange={amountChangeHandlerTest} 
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date" 
            min="2022-01-01" 
            max={dateInputMax} 
            value={date.toISOString().split("T")[0]}
            onChange={dateChangeHandlerTest}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
