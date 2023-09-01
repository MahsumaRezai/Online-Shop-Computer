import { Fragment, useState } from "react";
import classes from './Form.module.css';

const Formback = (props) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [massage, setMassage] = useState('');
     /*const [nameCheck,setNameCaheck]=useState(false);
    const [numCheck,setNumCaheck]=useState(false);
    const [emailCheck,setEmaiCaheck]=useState(false);
    const [massCheck,setMassCaheck]=useState(false);
*/

    const formHandler = (event) => {
        event.preventDefault();
        console.log(name, email, number, massage)

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
                    <input placeholder='Phone Number ' onChange={Nunber} />
                    <input placeholder='Email' onChange={Email} />
                    <input placeholder='Massage' onChange={Massage} />
                    <button className={classes.btn}> Send</button>



                </form>



            </div>

        </Fragment>
    )
}
export default Formback;