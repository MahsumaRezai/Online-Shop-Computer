import { Fragment } from "react";
import Reactdom from 'react-dom';
import Card from './Card'
import classes from './Module.module.css';
import img from '../img/about.png'

const Backdrop = (props) => {
    return (
        <div className={classes.back}></div>

    )
}
const Moduloerly = (props) => {
    return (<Card className={classes.modal}>
        <div>
            <div>
                <img src={img} alt="" className={classes.img} />
                <p></p>
            </div>

        </div>
    </Card>
    )

}
const Module = (props) => {
    return (
        <Fragment>
            {Reactdom.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
            {Reactdom.createPortal(<Moduloerly />, document.getElementById("overlay-root"))}

        </Fragment>
    )
}
export default Module;