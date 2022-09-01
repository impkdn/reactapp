

import "./Expenses.css"
import Card from "../UI/Card";
import YearFilter from "./YearFilter";
import {useState} from "react"
import Button from "../UI/ShowAllButton"
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [selectedYear, setselectedYear] = useState("2021")

    const onYearSelectHander = (selected) => {
        setselectedYear(selected);
    }
    const filtereditems = props.items.filter(
        (x) => {
         return    x.date.getFullYear().toString() === selectedYear 
        }
    )

    
   
    return (
        <Card className="expenses">
            <YearFilter selected = {selectedYear} onYearSelect = {onYearSelectHander}/>
            <ExpensesChart items = {filtereditems}></ExpensesChart>
            <ExpenseList items ={filtereditems}></ExpenseList>
            <Button />


        </Card>
    )
}


export default Expenses;