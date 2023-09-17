import './ExpenseDate.css';

// sometimes we can split larger components into smaller ones to make code more maintainable and easier to modify.
// In this case, we are separating the date from the ExpenseItem component
// It is a good practice to keep components small and focused
// this component is now also reusable and we can use it anywhere in the application
function ExpenseDate({date}: {date: Date}) {
	const month = date.toLocaleDateString('en-US', {month: 'long'});
  	const day = date.toLocaleDateString('en-US', {day: '2-digit'});
  	const year = date.getFullYear();

	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-date__day'>{day}</div>
    	</div>
	);
}

export default ExpenseDate;