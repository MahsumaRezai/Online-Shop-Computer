import { Fragment } from "react";
import Head from "./Componets/Head/Head";
import Headimg from "./Componets/Head/Headimg";
import About from "./Componets/About/About";
import Product from "./Componets/Product/Product";
import Module from "./Componets/UI/Module";

function App() {
    return (
        < Fragment >
            <Head />
            <Headimg />
            <About />
            <Product />
            <Module />
        </Fragment >
    )

}

export default App;
