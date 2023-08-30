import { Fragment } from "react";
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import classes from './Product.module.css';



const Productimg = (props) => {
    return (
        <Fragment>
            <div>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>

                <div>
                    <img src={img3} alt="" />
                </div>

            </div>

        </Fragment>
    )
}
export default Productimg