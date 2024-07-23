'use client';

import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { showResults } from '@/app/utilities/state/slices/quantitySlice';

const Footer = ({className}) => {
  const dispatch = useDispatch();

  const handleCalculate = () => {
    dispatch(showResults());
  };

  return (
    <div className={`${styles['footer-contianer']} ${className}`}>
        <div className={styles['reset-save-wrapper']}>
            <button className={styles.reset}>Reset</button>
            <button className={styles.save}>Save</button>
        </div>
        <div>
            <button className={styles.calculate} onClick={handleCalculate}>Calculate</button>
        </div>
    </div>
  )
}

export default Footer;