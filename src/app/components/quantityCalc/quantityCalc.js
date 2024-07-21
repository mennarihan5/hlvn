'use client';
import CalculatorsImage from '../calculatorsImage/calculatorsImage';
import styles from './styles.module.scss';
import Results from '../results/results';
import PackContent from '../packContent/packContent';
import ProtocolInputs from '../protocol inputs/protocolInputs';
import { useSelector } from 'react-redux';

const QuantityCalc = () => {
  const showResults = useSelector((state) => state.quantityCalculator.showResults);

 


  return (
    <div className={styles['quantity-calc-container']}>
        <div className={styles['quantity-calc']}>
          <PackContent />
          <ProtocolInputs />
       </div>
        <div className={styles['img-container']}>
          {showResults? <Results /> :  <CalculatorsImage />}
        </div>
    </div>
  )
}

export default QuantityCalc;