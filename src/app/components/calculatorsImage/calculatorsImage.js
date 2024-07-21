import styles from './styles.module.scss';
import calcImage from '../../assets/images/quantity calculator illustartion.svg';
import Image from 'next/image';

const CalculatorsImage = () => {
  return (
    <div>
        <div>
            <h5>Quantity calculation result</h5>
        </div>
        <div>
            <Image className={styles.calcImage} src={calcImage} alt='Quantity calculator illustration'/>
        </div>
        <p>No results yet</p>
    </div>
  )
}

export default CalculatorsImage;