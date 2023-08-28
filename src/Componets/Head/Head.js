import { Fragment } from "react";
import img from '../img/top_img.png';
import classes from './Head.module.css'
import Button from "../Button/Button";

const Head = (props) => {
    return (<Fragment>
        <div className={classes.warp}>
            <div className={classes.content}>
                <div>
                    <h1 className={classes.title}>Computer and<br></br>
                        laptop shop</h1>
                    <Button>Buy Now</Button>

                </div>
                <div>
                    <img src={img} alt="" />

                </div>



            </div>


        </div>

    </Fragment>
    )
}
export default Head;
