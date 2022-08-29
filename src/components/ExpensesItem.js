import "./ExpensesItem.css"
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    
    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date = {props.date}></ExpenseDate>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            <div className="expense-item__price">
                <h2>${props.amount}</h2>
            </div>
            </div>
        </div>
    )
}

export default ExpenseItem;