import Logo from '../logo/logo';
import styles from './styles.module.scss';


const Navbar = () => {
  return (
    <div className={styles['navbar-container']}>
        <div className={styles.logo}>
            <Logo />
        </div>
        <div className={styles['nav-list-wrapper']}>
            <ul className={styles['nav-list']}>
                <li className={styles['list-item']}>Quantity Calculator</li>
                <li className={styles['list-item']}>Population Calculator</li>
                <li className={styles['list-item']}>Cost Calculator</li>
                <li className={styles['list-item']}>History</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;