import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

interface ExpenseProps {
  title: string;
  amount: number;
  date: Date;
}

// you must only have one root element per return statement/ per jsx code snippet
function ExpenseItem({title, amount, date}: ExpenseProps) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
