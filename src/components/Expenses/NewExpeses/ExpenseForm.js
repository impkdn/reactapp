import "./ExpenseForm.css";

const ExpenseForm = () => {

    return(

    <form>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text"/>
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number"/>
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-01-01"/>
            </div>
        </div>
        <button className="new-expense__actions" type="submit">Add Expense</button>

    </form>
    );
}

export default ExpenseForm;