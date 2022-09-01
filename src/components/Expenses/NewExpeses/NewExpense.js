import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


    const omNewExpenseData = (data) => {
        const expenseData = {
            ...data,
            id : Math.random().toString()
        }
        props.onNewExpenseDone(expenseData)
        // console.log(expenseData);
        // setIsEditing(false)
    }

    const showItemAdder = () => {
        setIsEditing(true)
    }

    const onCencel = () => {

        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {isEditing && <ExpenseForm newExpenseData = {omNewExpenseData} cencel = {onCencel} />}
            {!isEditing && <button onClick={showItemAdder}>Add Expenses</button>}
            
        </div>
    )
}

export default NewExpense;