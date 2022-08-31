import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpeses/NewExpense";
import { useState } from "react";

const DUMMY__DATA = [
  {
    id: 'e1',
    newTitle: 'Toilet Paper',
    newAmount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    newTitle: 'New TV', 
    newAmount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    newTitle: 'Car Insurance',
    newAmount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    newTitle: 'New Desk (Wooden)',
    newAmount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setUpdatedExpense] = useState(DUMMY__DATA)
  const onNewExpense = (expense) => {
      console.log(expense);
      setUpdatedExpense((previousExpense) => {
        return [expense, ...previousExpense]


      })
      console.log(expenses)

    // console.log(data);
    // const newExpenseData = {
    //   ...data
    // }
    // console.log(newExpenseData)
    // console.log("HIiii")

  }

  return (
    <div>
      <NewExpense onNewExpenseDone={onNewExpense} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
