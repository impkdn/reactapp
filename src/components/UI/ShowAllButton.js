// import "./ShowAllButton.css"
import classes from "./ShowAllButton.module.css"



const ShowAllButton = (props) => {
    
    
    


    return (
        <button className={classes.btnPrimary} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
    );
}


export default ShowAllButton;