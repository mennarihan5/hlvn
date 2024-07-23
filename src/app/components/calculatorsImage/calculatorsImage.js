import styles from './styles.module.scss';
import calcImage from '../../assets/images/quantity calculator illustartion.svg';
import calculatorImg from '../../assets/images/calculator.svg';
import Image from 'next/image';

const CalculatorsImage = () => {
  return (
    <div className={styles['calc-img-container']}>
        <div className={styles['title-wrapper']}>
          <Image className={styles['calculator-img']} src={calculatorImg} alt='calculator' />
          <h5 className={styles.title}>Quantity calculation result</h5>
        </div>
        <div className={styles['calc-img']}>
            <Image className={styles.image} src={calcImage} alt='Quantity calculator illustration'/>
        </div>
        <p className={styles['calc-img-txt']}>No results yet</p>
    </div>
  )
}

export default CalculatorsImage;