import { Fragment } from "react";
import classes from './About.module.css';


const Button = (props) => {
    return (
        <Fragment>
            <div className={classes.button}>
                <button className={classes.btn}>{props.children}</button>

            </div>
        </Fragment>
    )
}
export default Button;