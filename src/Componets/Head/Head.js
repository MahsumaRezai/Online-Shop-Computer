import { Fragment } from "react";
import img from '../img/top_img.png';
import classes from './Head.module.css'

const Head = (props) => {
    return (<Fragment>
        <div className={classes.warp}>
            <div className={classes.content}>

                <h1 className={classes.title}>Computer and<br></br>
                    laptop shop</h1>
                <img src={img} alt="" />
            </div>



        </div>

    </Fragment>
    )
}
export default Head;
