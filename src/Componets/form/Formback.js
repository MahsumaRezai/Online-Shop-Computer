import { Fragment, useState } from "react";
import classes from './Form.module.css';

const Formback = (props) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [massage, setMassage] = useState('');
    const [nameCheck, setNameCaheck] = useState(false);
    const [numCheck, setNumCaheck] = useState(false);
    const [emailCheck, setEmaiCaheck] = useState(false);
    const [massCheck, setMassCaheck] = useState(false);


    const formHandler = (event) => {
        event.preventDefault();
        if (name.trim().length === 0) {
            setNameCaheck(true)

        }
        if (number.trim().length === 0) {
            setNumCaheck(true)
        }
        if (email.trim().length === 0) {
            setEmaiCaheck(true)
        }
        if (massage.trim().length === 0) {
            setMassCaheck(true)
        }

    }
    const Name = (event) => {
        setName(event.target.value);

    }
    const Nunber = (event) => {
        setNumber(event.target.value);

    }
    const Email = (event) => {
        setEmail(event.target.value);

    }
    const Massage = (event) => {
        setMassage(event.target.value);

    }


    return (
        <Fragment>
            <div className={classes.form}>
                <h1 className={classes.title}>Request a Call back</h1>
                <form className={classes.context} onSubmit={formHandler}>
                    <input placeholder='Name' onChange={Name} />
                    {nameCheck && <p className={classes.para}>Name is requried</p>}
                    <input placeholder='Phone Number ' onChange={Nunber} />
                    {numCheck && <p className={classes.para}>Phone Number is requried</p>}
                    <input placeholder='Email' onChange={Email} />
                    {emailCheck && <p className={classes.para}>Email is requried</p>}
                    <input placeholder='Massage' onChange={Massage} />
                    {massCheck && <p className={classes.para}>Massage is requried</p>}
                    <button className={classes.btn}> Send</button>



                </form>



            </div>

        </Fragment>
    )
}
export default Formback;