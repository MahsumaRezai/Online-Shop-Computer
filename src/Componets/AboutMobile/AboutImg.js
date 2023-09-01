import { Fragment } from "react";
import img1 from '../img/imgOne.jpg';
import img2 from '../img/imgTwo.jpg';
import classes from './AboutMob.module.css'


const AboutImg = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />

            </div>

        </Fragment>
    )
}
export default AboutImg;