import { Fragment } from "react";

const Button = (props) => {
    return (
        <Fragment>
            <div className="button">
                <button className="btn">{props.children}</button>

            </div>
        </Fragment>
    )
}
export default Button;