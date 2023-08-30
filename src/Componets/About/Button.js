import { Fragment } from "react";
import classes from './About.module.css';


const Button = (props) => {
    return (
        <Fragment>
            <div className={classes.button}>
                <button className={classes.btn} onClick={props.onClick}>{props.children}</button>

            </div>
        </Fragment>
    )
}
export default Button;