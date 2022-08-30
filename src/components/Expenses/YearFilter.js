const YearFilter = (props) => {
    const onChangeEventHandeler = (event) => {
        props.onYearSelect(event.target.value);
        console.log(event.target.value);
    }


    return (
        
            <div>
                <label>Select Year</label>
                <select onChange={onChangeEventHandeler} value = {props.seleted}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
       
    )
}
export default YearFilter;