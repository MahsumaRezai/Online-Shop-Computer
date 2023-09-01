import classes from './Footer.module.css';
import img from '../img/profile.jpg'

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <h1 className={classes.title}> Call Now</h1>
            <div className={classes.warp}>
                <img src={img} alt="" className={classes.img} />
                <p>mahsuma.rezai8@gmail.com</p>
                <p>&</p>
                <p>@MahsumaRezai</p>
            </div>


        </div>
    )
}
export default Footer;