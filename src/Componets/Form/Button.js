import classes from './Form.module.css'
const Button = (props) => {
    return (
        <div>
            <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
        </div>
    )
}
export default Button;