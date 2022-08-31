import "./ExpensesItem.css"
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
// import Button from "../UI/Button";
// import React, { useState } from "react";


function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.title)

    // const clickHandeler = () => {
    //     setTitle("Updated")
    // }
    // const title= props.title
    // const amount= props.amount
    const date = props.date
    console.log(props.title)

    return (

        <li>

            <Card className="expense-item">
                <div>
                    <ExpenseDate date={date}></ExpenseDate>
                </div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">
                        <h2 className="expense-item__amount">${props.amount}</h2>

                    </div>
                </div>

            </Card>
        </li>
    )
}

export default ExpenseItem;