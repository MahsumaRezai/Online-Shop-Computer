import classes from './About.module.css';
const AboutText = (props) => {
    return (
        <div className={classes.text}>
            <h1>About My computer</h1>
            <p className={classes.para}>This  section is for about my computers you can give information in this section</p>
        </div>
    )
}
export default AboutText;