

import "./Expenses.css"
import Card from "../UI/Card";
import YearFilter from "./YearFilter";
import {useState} from "react"
import Button from "../UI/ShowAllButton"
import ExpenseList from "./ExpenseList";

function Expenses(props) {
    const [selectedYear, setselectedYear] = useState("2023")

    const onYearSelectHander= (selected) => {
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
            <ExpenseList items ={filtereditems}></ExpenseList>
            <Button />
            
           

            
            {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}

        </Card>
    )
}


export default Expenses;