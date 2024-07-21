import styles from './styles.module.scss';
import Image from 'next/image';
import notification from '../../assets/images/notification-bing.svg';
import profileImg from '../../assets/images/Profile.svg';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const UserAccount = () => {
  return (
    <div className={styles['user-account-container']}>
        <div className={styles['notification-wrapper']}>
            <Image className={styles.notification} src={notification} alt='Notification'/>
        </div>
        <div className={styles.profile}>
            <div className={styles['profile-img-wrapper']}>
                <Image className={styles['profile-img']} src={profileImg} alt='Profile' />
            </div>
            <div className={styles['profile-info-wrapper']}>
                <h5 className={styles['profile-username']}>Hi, Jackie Brad!</h5>
                <p className={styles['profile-email']}>jackie23@gmail.com</p>
            </div>
            <div className={styles.dots}>
                <HiOutlineDotsHorizontal className={styles['dots-icon']} />
            </div>
        </div>
    </div>
  )
}

export default UserAccount;