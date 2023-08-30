import { Fragment, useState } from "react";
import Head from "./Componets/Head/Head";
import Headimg from "./Componets/Head/Headimg";
import About from "./Componets/About/About";
import Product from "./Componets/Product/Product";
import Module from './Componets/UI/Module'

function App(props) {
    const [show, SetShow] = useState(false);
    const Cart = (props) => {
        SetShow(true)
    }
    const Hide = (props) => {
        SetShow(false)
    }

    return (
        < Fragment >
            <Head />
            <Headimg />
            <About />
            <Product onShow={Cart} />
            {show && <Module onhide={Hide} />}

        </Fragment >
    )

}

export default App;
