import { Fragment } from "react";
import classes from './Product.module.css';
import ProductText from "./ProductText";
import Productimg from "./Productimg";

const Product = (props) => {
    return (
        <Fragment>
            <div className={classes.roduct}>
                <ProductText />
                <Productimg />

            </div>

        </Fragment>
    )
}
export default Product;