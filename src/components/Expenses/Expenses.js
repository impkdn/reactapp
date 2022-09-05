

import "./Expenses.scss"
import Card from "../UI/Card";
import YearFilter from "./YearFilter";
import {useState} from "react"
import ShowAllButton from "../UI/ShowAllButton"
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [selectedYear, setselectedYear] = useState("2020")
    const [showAllExpense, setShowAllExpense] = useState(false);

    const onYearSelectHander = (selected) => {
        setselectedYear(selected);
        setShowAllExpense(false)
    }
    const filtereditems = props.items.filter(
        (x) => {
         return    x.date.getFullYear().toString() === selectedYear 
        }
    )
    const clickHandler = (event) => {
        console.log("Hii")
        setShowAllExpense(true)

    }
    
   
    return (
        <Card className="expenses">
            <YearFilter selected = {selectedYear} onYearSelect = {onYearSelectHander}/>
            <ExpensesChart items = {filtereditems}></ExpensesChart>
            <ExpenseList items = {!showAllExpense? filtereditems: props.items}></ExpenseList>
            <ShowAllButton onClick = {clickHandler}>Show All</ShowAllButton>


        </Card>
    )
}


export default Expenses;