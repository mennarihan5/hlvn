import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const CustomDropdown = ({ name, value, options, onChange, className, selectedClassName, arrowClassName, selectTitleClassName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);
    
    useEffect(() => {
        if (value) {
            setSelected(value);
        }
    }, [value]);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
      };
    
    const handleOptionClick = (option) => { 
        setSelected(option);
        setIsOpen(false);
        onChange({
            target: {
                name,
                value: option
            }
        })
    }

  return (
    <div className={`${styles['dropdown-container']} ${className}`}>
      <div className={`${styles.select} ${selectTitleClassName}`} onClick={handleDropdownClick}>
        {selected} 
        <span className={`${styles['arrow-down']} ${arrowClassName}`}>
            <IoIosArrowDown />
        </span>
      </div>
      {isOpen && (
        <div className={`${styles['selected-items']} ${selectedClassName}`}>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)} className={styles['option-item']}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomDropdown;