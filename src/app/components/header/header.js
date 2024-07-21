import Navbar from '../navbar/navbar';
import UserAccount from '../userAccount/userAccount';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <Navbar />
      <UserAccount />
    </div>
  )
}

export default Header;