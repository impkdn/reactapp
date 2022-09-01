import react from "react"
import Chart from "../Chart/Chart"

const ExpensesChart = (props) => {

    const totalItems = props.items
    console.log(totalItems);

    const chartDataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0}
    ]
    
    // var totalAmount = 0
    // const totalAmountCurrentMonth = () => {
    //     const  filteredAmountArray =     totalItems.map((totalItems) => {
    //         totalAmount += totalItems.newAmount
    //     }
        
    //     )
    //     console.log(totalAmount);
        
    for (let x of totalItems) {
        const expenseMonth = x.date.getMonth();
        chartDataPoints[expenseMonth].value +=  x.newAmount
    }
    // }
    console.log(chartDataPoints)
    // totalAmountCurrentMonth();
    return (
        <div>
            <Chart total={chartDataPoints} />
        </div>
    );
}

export default ExpensesChart;