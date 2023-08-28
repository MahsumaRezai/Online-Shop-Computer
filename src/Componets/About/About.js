import { Fragment } from "react";
import classes from './About.module.css';
import Aboutimg from "./Aboutimg";
import AboutText from "./AboutText";

const About = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
                <AboutText />
                <Aboutimg />

            </div>
        </Fragment>
    )
}
export default About;