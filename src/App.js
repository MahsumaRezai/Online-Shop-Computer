import { Fragment, useState } from "react";
import Head from "./Componets/Head/Head";
import Headimg from "./Componets/Head/Headimg";
import About from "./Componets/About/About";
import Product from "./Componets/Product/Product";
import Module from './Componets/UI/Module';
import AboutMob from "./Componets/AboutMobile/AboutMobile";
import Modules from './Componets/About/Module'
import Form from "./Componets/form/Form";

function App(props) {
    const [show, SetShow] = useState(false);
    const [showCart, SetShowCart] = useState(false)

    const Cart = (props) => {
        SetShow(true)
    }
    const Hide = (props) => {
        SetShow(false)
    }

    const CartIsShow = (props) => {
        SetShowCart(true)
    }
    const CartHide = (props) => {
        SetShowCart(false)
    }
    return (
        < Fragment >
            <Head />
            <Headimg />
            <About onClick={CartIsShow} />
            {showCart && <Modules onHide={CartHide} />}

            <Product onShow={Cart} />
            {show && <Module onhide={Hide} />}
            <AboutMob />
            <Form />

        </Fragment >
    )

}

export default App;
