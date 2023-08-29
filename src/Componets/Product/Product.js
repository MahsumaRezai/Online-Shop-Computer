import { Fragment } from "react";
import classes from './Product.module.css';
import ProductText from "./ProductText";

const Product = (props) => {
    return (
        <Fragment>
            <div className={classes.roduct}>
                <ProductText />

            </div>

        </Fragment>
    )
}
export default Product;