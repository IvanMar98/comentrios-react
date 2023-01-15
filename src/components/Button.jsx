import './Button.css';

function Button(props){
    
    return(
        <button className=  "Button_theme"
        onClick={props.onClickFn}>Tema {props.value}</button>
    );
}
export default Button;