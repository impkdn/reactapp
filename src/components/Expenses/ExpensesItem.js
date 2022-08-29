import "./ExpensesItem.css"
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
// import Button from "../UI/Button";
import React, { useState } from "react";
import "../UI/Button.css"

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)

    const clickHandeler = () => {
        setTitle("Updated")
    }

    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date = {props.date}></ExpenseDate>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <button className = "btn-primary" onClick = {clickHandeler}>Change Title</button>
            <div className="expense-item__price">
                <h2>${props.amount}</h2>
            </div>
            </div>
        </Card>
    )
}

export default ExpenseItem;