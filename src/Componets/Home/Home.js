import { Fragment } from "react";
import classes from './Home.module.css';
import img1 from '../image/img.png'

const Home = (props) => {
    return (
        <Fragment>
            <div className={classes.home}>
                <div className={classes.image}>
                    <img src={img1} alt="" />
                    <h1 className={classes.title}>Beauty Style For Fahsion</h1>

                </div>


            </div>


        </Fragment>
    )
}
export default Home;