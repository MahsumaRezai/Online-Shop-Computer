import { Fragment } from "react";
import Reactdom from 'react-dom';
import Card from './Card'
import classes from './Module.module.css';
import img from '../img/imgOne.jpg'

const Backdrop = (props) => {
    return (
        <div className={classes.back} onClick={props.onhide}></div>

    )
}
const Moduloerly = (props) => {
    return (<Card className={classes.modal}>
        <div>
            <div className={classes.paragh}>
                <img src={img} alt="" className={classes.img} />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Earum odio aspernatur omnis libero delectus doloremque tenetur
     ipsum error! Architecto officiis nostrum blanditiis facere sequi
      eos repellat deserunt impedit soluta magni!</p>
            </div>

        </div>
    </Card>
    )

}
const Module = (props) => {
    return (
        <Fragment>
            {Reactdom.createPortal(<Backdrop  onhide = { props.onhide }/ >, document.getElementById("backdrop-root"))}
            {Reactdom.createPortal(<Moduloerly />, document.getElementById("overlay-root"))}

        </Fragment>
    )
}
export default Module;