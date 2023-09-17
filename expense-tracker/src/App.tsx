import NewExpense, { ExpenseFormDataWithId } from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import './App.css';

function App() {

  function addExpenseHandler(expenseData: ExpenseFormDataWithId) {
    console.log('In App.js');
    console.log(expenseData);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
}

export default App;
