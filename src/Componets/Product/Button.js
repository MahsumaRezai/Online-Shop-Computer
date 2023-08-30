import classes from './Product.module.css';
const Button = (props) => {
    return (
        <div className={classes.button}>
        <button className={classes.btn}

            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
        </div>
    );
};

export default Button;