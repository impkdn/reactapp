import "./Chart.css"
import React from "react"
import ChartBar from "./ChartBar"



const Chart = (props) => {
    const dataPointValues = props.total.map( (data) => data.value)
    

    const totalMaximum = Math.max(...dataPointValues)

    
    return (
        <div className="chart">
        {props.total.map( (content) => <ChartBar key={content.label} value = {content.value} label= { content.label } maxValue = {totalMaximum}/>)}    

        </div>

    )
}

export default Chart;