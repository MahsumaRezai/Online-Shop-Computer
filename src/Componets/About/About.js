import { Fragment } from "react";
import classes from './About.module.css';
import Aboutimg from "./Aboutimg";
import AboutText from "./AboutText";
import Button from "./Button";

const About = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
                <AboutText />
                <Aboutimg />
                <Button>Read More</Button>

            </div>
        </Fragment>
    )
}
export default About;