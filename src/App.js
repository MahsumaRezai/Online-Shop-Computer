import { Fragment, useState } from "react";
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Line from "./Componets/About/Line";
import Product from "./Componets/Product/Product";
import ErroModal from "./Componets/UI/ErrorModal";
import Information from "./Componets/Information/Information";
import Form from "./Componets/Form/Form";
import FormModule from './Componets/Form/FormModule';



function App() {
    const [add, setAdd] = useState(false);
    const [form, setform] = useState(false);
    const showCart = () => {
        setAdd(true);

    }
    const hideCart = () => {
        setAdd(false)
    }
    const formTrue = () => {
        setform(true)
    }
    const formFalse = () => {
        setform(false)
    }


    return (
        < Fragment >
            <Home />
            <About />
            <Line />
            <Information />
            <Product onshow={showCart} />
            {add && <ErroModal onhide={hideCart} />}
            <Form onform={formTrue} />
            {form && <FormModule ofform={formFalse} />}


        </Fragment >
    )
}

export default App;
