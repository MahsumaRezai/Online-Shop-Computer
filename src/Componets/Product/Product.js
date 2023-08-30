import { Fragment } from "react";
import classes from './Product.module.css';
import ProductText from "./ProductText";
import Productimg from "./Productimg";
import ProductImgTwo from "./ProductImgTwo";

const Product = (props) => {
    return (
        <Fragment>
            <div className={classes.roduct}>
                <ProductText />
                <Productimg />
                <ProductImgTwo />

            </div>

        </Fragment>
    )
}
export default Product;