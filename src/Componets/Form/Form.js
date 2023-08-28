import { Fragment, useRef} from "react";
import img from '../image/right.png';
import classes from './Form.module.css'
import Button from "./Button";

const Form = (props) => {
    const NameCheck = useRef();
    const PasswordCheck = useRef();
    const EmailCheck = useRef();
    const FormHandler = (event) => {
        event.preventDefault();
        const nameEnterd = NameCheck.current.value;
        const passwordEnterd = PasswordCheck.current.value;
        const emailEnterd = EmailCheck.current.value;
        if (nameEnterd.trim().length === 0 || passwordEnterd.trim().length === 0 || emailEnterd.trim().length === 0) {
            console.log('dkddk')
        }
        NameCheck.current.value = '';
        PasswordCheck.current.value = ''



    }

    return (
        <Fragment>
            <div >
                <div className={classes.img}>
                    <img alt="" src={img} />
                </div>
                <form className={classes.content} onSubmit={FormHandler} >
                    <h1 className={classes.title}>Get In Touch</h1>
                    <input placeholder="Name" ref={NameCheck} />
                    <input placeholder="Phone Number" ref={PasswordCheck} />
                    <input placeholder="Email" ref={EmailCheck} />
                    <textarea className={classes.text}></textarea>
                    <Button onClick={props.onform}>Send Me</Button>

                </form>



            </div>
        </Fragment>
    )
}
export default Form;
