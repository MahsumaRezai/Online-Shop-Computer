import { Fragment } from "react";
import img from '../img/about.png';
import classes from './AboutMob.module.css'

const AboutMob = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
                <div className={classes.text}>
                    <h1 className={classes.title}>Our Mobiles</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of<br></br>
                        a page when looking at its layout. The point of It is a long established fact that a reader<br></br>
                        will be distracted by the readable content of a page when looking at its layout.<br></br>
                        The point of It is a long established fact that a reader will be distracted by the</p>
                    <div className={classes.warp}>
                        <div className={classes.cartOne}></div>
                        <div className={classes.cartTwo}></div>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" className={classes.img} />
                </div>


            </div>
        </Fragment>
    )
}
export default AboutMob;
