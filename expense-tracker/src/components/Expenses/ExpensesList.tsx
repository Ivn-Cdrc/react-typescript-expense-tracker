import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';
import { Expense } from '../../App';
import { ReactElement } from 'react';

interface ExpensesListProps {
	items: Expense[];
}

function ExpensesList({items}: ExpensesListProps) {
	const expensesContentEmptyMessage: ReactElement =
		<h2 className='expenses-list__fallback'>Found no expenses.</h2>;

  const expensesContent: ReactElement[] = items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))

	return (
		<ul className='expenses-list'>
			{items.length === 0 && expensesContentEmptyMessage}
    	{items.length > 0 && expensesContent}
		</ul>
	);
}

export default ExpensesList;