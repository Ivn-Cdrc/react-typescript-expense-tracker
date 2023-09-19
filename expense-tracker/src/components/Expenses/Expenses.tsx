import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import "./Expenses.css";
import { Expense } from '../../App';
import { useState } from 'react';

interface ExpensesProps {
  items: Expense[];
}

function Expenses({items}: ExpensesProps) {
  const [filteredYear, setFilteredYear] = useState<string>('2020');
  // if deriving a value from a state, we can just compute the value and place it into a variable
  // const [filterInfoText, setFilterInfoText] = useState<string>('2019, 2020 & 2022');
  // when the state changes, this function is called again and a new value is derived
  let filterInfoText = '2019, 2021 & 2022';

  if (filteredYear === '2019') {
    filterInfoText = '2020, 2021 & 2022';
  } else if (filteredYear === '2021') {
    filterInfoText = '2019, 2020 & 2022';
  } else {
    filterInfoText = '2019, 2020 & 2021';
  }

  function filterChangeHandler(selectedYear: string) {
    // updating the state
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem 
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem 
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
      </Card>
    </div>
	);
}

export default Expenses;
