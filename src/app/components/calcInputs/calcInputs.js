import styles from './styles.module.scss';

const CalcInputs = ({label, name, value, placeholder, className, labelClassName, onChange, disabled, readOnly = false, type = 'text'}) => {
  return (
    <div className={styles['calcInputs-wrapper']}>
        <label className={`${styles['calc-label']} ${labelClassName}`}>{label}</label>
        <input
          className= {`${className} ${styles['calc-input']}`}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
        />
    </div>
  )
}

export default CalcInputs;