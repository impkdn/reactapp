import ExpenseItem from "./ExpensesItem";
import "./ExpenseList.css"

const ExpenseList = (props) => {

    if (props.items.length === 0) {
        return (
            <p className="expenses-list__fallback ">No Match found</p>
        )
    }

return (

    <ul className="expenses-list">
       {props.items.map((expensesDone) => (<ExpenseItem key = {expensesDone.id} title = {expensesDone.newTitle} amount = {expensesDone.newAmount} date = {expensesDone.date}></ExpenseItem>))}

    </ul>
    

);

}

export default ExpenseList;