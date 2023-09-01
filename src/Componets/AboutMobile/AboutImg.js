import { Fragment } from "react";
import img1 from '../img/imgOne.jpg';
import img2 from '../img/imgTwo.jpg'

const AboutImg = (props) => {
    return (
        <Fragment>
            <div>
                <img src={img1} alt="" />
                <img src={img2} alt="" />

            </div>

        </Fragment>
    )
}
export default AboutImg;