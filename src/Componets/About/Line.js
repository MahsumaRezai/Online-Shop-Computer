import { Fragment } from "react";
import img from '../image/slin.png'
import classes from "./About.module.css";

const Line = () => {
    return (
        <Fragment>
            <div className={classes.Line}>
                <img src={img} alt />

            </div>
        </Fragment>
    )
}
export default Line;