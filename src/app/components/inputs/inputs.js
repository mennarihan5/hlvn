import styles from './styles.module.scss';

const Input = ({id, label, placeholder, type, icon, btn, register, errorMessage}) => {
    return (
        <div className={styles['input-group']}>
            <label htmlFor={id}>{label}</label>
            <div className={styles['input-field']}>
                <input type={type} id={id} placeholder={placeholder} {...register} />
                <span>{icon}</span>
            </div>
            <span className={styles['error-msg']}>{errorMessage}</span>
        </div>
    )
}

export default Input;