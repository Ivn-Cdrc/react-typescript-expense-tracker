import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { Expense } from "../../App";
import { useState } from "react";

interface ExpensesProps {
  items: Expense[];
}

function Expenses({ items }: ExpensesProps) {
  const [filteredYear, setFilteredYear] = useState<string>("2020");
  // if deriving a value from a state, we can just compute the value and place it into a variable
  // const [filterInfoText, setFilterInfoText] = useState<string>('2019, 2020 & 2022');
  // when the state changes, this function is called again and a new value is derived

  function filterChangeHandler(selectedYear: string) {
    // updating the state
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedOption={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
