import styles from './styles.module.scss';


const Input = (props) => {
    const {id, label, placeholder, type, icon, btn, register, errorMessage, errorIcon, className} = props
    // const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // const togglePasswordVisibility = () => {
    //     setIsPasswordVisible(!isPasswordVisible);
    // }

    return (
        <div className={styles['input-group']}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <div className={styles['input-field']}>
                <input className={`${styles.input} ${className}`} type={type} id={id} placeholder={placeholder} {...register} />
                <span className={styles['hide-icon']}>{icon}</span>
            </div>
            {
                errorMessage && (
                    <span className={styles['error-msg-wrapper']}>
                        <span className={styles['error-icon']}>{errorIcon}</span>
                        <span className={styles['error-msg']}>{errorMessage}</span>
                    </span>
                )
            }
        </div>
    )
}

export default Input;