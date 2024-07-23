'use client';

import styles from './styles.module.scss';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import QuantityCalc from '../components/quantityCalc/quantityCalc';

const QuantityCalcPage = () => {
  return (
    <div className={styles['quantity-page-container']}>
        <div className={styles['wrapper-one']}>
          <Header/>
          <QuantityCalc />
        </div>
        <Footer 
          className={styles['footer-cont']}
        />
    </div>

  )
}

export default QuantityCalcPage;