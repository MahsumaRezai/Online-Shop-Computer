import { Fragment } from "react";
import classes from './Product.module.css';
import ProductText from "./ProductText";
import Productimg from "./Productimg";
import ProductImgTwo from "./ProductImgTwo";
import Button from "./Button";

const Product = (props) => {

    return (
        <Fragment>
            <div className={classes.roduct}>
                <ProductText />
                <Productimg />
                <ProductImgTwo />
                <Button onClick={props.onShow}>Read more</Button>


            </div>

        </Fragment>
    )
}
export default Product;