import { Fragment } from "react";
import classes from './Form.module.css';

const Formback = (props) => {
    return (
        <Fragment>
            <div className={classes.form}>
                <h1 className={classes.title}>Request a Call back</h1>
                <form className={classes.context}>
                    <input placeholder='Name' />
                    <input placeholder='Phone Number' />
                    <input placeholder='Email' />
                    <input placeholder='Massage' />
                    <button className={classes.btn}> Send</button>



                </form>



            </div>

        </Fragment>
    )
}
export default Formback;