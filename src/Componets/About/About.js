import { Fragment } from "react";
import img1 from '../image/weicon1.png';
import img2 from '../image/weicon2.png';
import img3 from '../image/weicon3.png';
import img4 from '../image/weicon4.png';
import classes from './About.module.css'



const About = (props) => {
    return (
        <Fragment>
            <h1 className={classes.title}>What we Do</h1>
            <div className={classes.content}>
                <div className={classes.cart}>
                    <img src={img1} alt="" />
                    <p>Nail Art</p>
                </div>


                <div className={classes.cart}>
                    <img src={img2} alt="" />
                    <p>Manicure</p>
                </div>

                <div className={classes.cart}>
                    <img src={img3} alt="" />
                    <p>Pedicure</p>
                </div>

                <div className={classes.cart}>
                    <img src={img4} alt="" />
                    <p>Paraffin wax</p>
                </div>

            </div>

        </Fragment>
    )
}
export default About;