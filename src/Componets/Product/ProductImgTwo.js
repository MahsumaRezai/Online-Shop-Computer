import { Fragment } from "react";
import img1 from '../img/4.png';
import img2 from '../img/4.png';
import img3 from '../img/6.png';
import img4 from '../img/star.png'
import classes from './Product.module.css';



const ProductImgTwo = (props) => {
    return (
        <Fragment>
            <div className={classes.SectionImg}>
                <div className={classes.cart}>
                    <img src={img1} alt="" />
                    <p>100$</p>
                    <p>Mobile Phone</p>
                    <img src={img4} alt="" />
                </div>
                <div className={classes.cart}>
                    <img src={img2} alt="" />
                    <p>100$</p>
                    <p>Mobile Phone</p>
                    <img src={img4} alt="" />
                </div>

                <div className={classes.cart}>
                    <img src={img3} alt="" />
                    <p>100$</p>
                    <p>Mobile Phone</p>
                    <img src={img4} alt="" />
                </div>

            </div>

        </Fragment>
    )
}
export default ProductImgTwo