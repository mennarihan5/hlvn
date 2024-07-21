import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../assets/images/logo.svg';

const Logo = () => {
  return (
    <div className={styles['logo-wrapper']}>
        <Image className={styles.logo} src={logo} alt='Logo'/>
    </div>
  )
}

export default Logo;