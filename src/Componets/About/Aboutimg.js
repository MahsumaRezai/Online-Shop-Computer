import img from '../img/about_img.png';
import classes from './About.module.css';

const Aboutimg = (props) => {
    return (
        <div className={classes.image}>
            <img src={img} alt="" />

        </div>
    )
}
export default Aboutimg;