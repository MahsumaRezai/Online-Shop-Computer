
import ReactDom from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';
import { Fragment } from 'react';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onhide} />
}
const Modaloerlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h1>Welcome to this page</h1>
            </header>
            <div className={classes.content}>

                <p className={classes.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sapiente vel sunt nam modi
            illo accusamus blanditiis iste odio, fugiat officiis earum doloribus atque, cum rem dolor impedit omnis deleniti!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sapiente vel sunt nam modi
            illo accusamus blanditiis iste odio, fugiat officiis earum doloribus atque, cum rem dolor impedit omnis deleniti!</p>

            </div>

        </Card>
    )
}
const ErroModal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onhide={props.onhide} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErroModal;