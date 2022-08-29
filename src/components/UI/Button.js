import "./Button.css"



const Button = (props) => {
    const clickHandeler = () => {
        props.title = "updated";
    }


    return (
        <button className="btn-promary" onClick={clickHandeler}>Button</button>
    );
}


export default Button;