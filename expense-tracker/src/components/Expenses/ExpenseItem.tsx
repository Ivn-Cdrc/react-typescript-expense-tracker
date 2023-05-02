import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

interface ExpenseProps {
  title: string;
  amount: number;
  date: Date;
}

// in this case, ExpenseItemState and ExpenseProps are identical, no need for the other.
// interface ExpenseItemState {
//   title: string;
//   amount: number;
//   date: Date;
// }

// you must only have one root element per return statement/ per jsx code snippet
function ExpenseItem({title, amount, date}: ExpenseProps) {
  // sets the initial state of the component
  const initialState: ExpenseProps = {
    title: title,
    amount: amount,
    date: date,
  };

  // react hooks must only because inside of react component functions. They cannot be called inside of nested functions, only
  // inside react component functions!!! There is only one exception to this rule.
  // If we have changing data that will be reflected into the UI, then we need state.
  const [state, setState] = useState<ExpenseProps>(initialState);
  const { title: currentTitle, amount: currentAmount, date: currentDate } = state;

  
  // when we call this function in the onClick={}, we don't execute it with titleChangeHandler(), 
  // we just point at it (titleChangeHandler).
  // otherwise the code would be run when the JSX element is returned, which is too early.
  // event listeners can be added into all built-in HTML elements.
  function titleChangeHandler() {
    setState({...state, title: 'Title Changed!'});
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={currentDate} />
      <div className='expense-item__description'>
        <h2>{currentTitle}</h2>
        <div className='expense-item__price'>${currentAmount}</div>
      </div>
      <button onClick={titleChangeHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
