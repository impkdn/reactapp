import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const omNewExpenseData = (data) => {
        const expenseData = {
            ...data,
            id : Math.random().toString()
        }
        props.onNewExpenseDone(expenseData)
        console.log(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm newExpenseData = {omNewExpenseData}/>
            <button>Add  Expenses</button>
            
        </div>
    )
}

export default NewExpense;