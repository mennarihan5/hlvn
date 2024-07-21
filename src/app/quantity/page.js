'use client';

import styles from './styles.module.scss';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import QuantityCalc from '../components/quantityCalc/quantityCalc';

const QuantityCalcPage = () => {
  return (
    <div className={styles['quantity-page-container']}>
        <Header/>
        <QuantityCalc />
        <Footer />
    </div>

  )
}

export default QuantityCalcPage;