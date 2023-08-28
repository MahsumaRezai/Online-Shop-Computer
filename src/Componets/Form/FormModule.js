
import ReactDom from 'react-dom';
import Card from '../UI/Card';
import classes from '../UI/ErrorModal.module.css';
import { Fragment } from 'react';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.ofform} />
}
const Modaloerlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h1>Data isnot correct</h1>
            </header>
            <div className={classes.content}>


            </div>

        </Card>
    )
}
const ErroModal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop ofform={props.onform} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErroModal;