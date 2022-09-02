import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
    var [title, setTitle] = useState("")
    var [amount, setAmount] = useState("")
    var [newDate, setNewDate] = useState("")

    // const [userInput, setUserInput] =  useState({
    //     title: "",
    //     amount: "",
    //     newDate: ""
    // })

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const onAmountChange = (event) => {
      setAmount(event.target.value);
    }
    const onDateChange = (event) => {
        setNewDate(event.target.value);
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            newTitle: title,
            newAmount: +amount,
            date: new Date(newDate)
        }
        console.log(expenseData);
        props.newExpenseData(expenseData)
        // setTitle(event.target.value);
        // console.log(title)

        setTitle  ("");
        setAmount ("");
        setNewDate  ("");
    }


    return (

        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" value={title} onChange={onTitleChange} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={onAmountChange} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-01-01" value={newDate} onChange={onDateChange} />
                </div>
            </div>
            <button type="button" onClick={props.cencel}>Cencel</button>
            <button className="new-expense__actions" type="submit">Add Expense</button>

        </form>
    );
}

export default ExpenseForm;