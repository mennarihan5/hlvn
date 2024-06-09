import styles from './styles.module.scss';

const Button = (props) => {
    const {children, className} = props;
    return(
        <button className={`${styles.btn} ${className}`}>
            {children}
        </button>
    )
}

export default Button;