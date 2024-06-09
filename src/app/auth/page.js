'use client'
import styles from './styles.module.scss';
import SignIn from '../components/signInForm/signInForm.js';
import SignUp from '../components/signUpForm/signUpForm.js';
import ImageSlider from '../components/imageSlider/imageSlider.js';
import { useState } from 'react';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleAuthToggle = () => {
        setIsSignUp(!isSignUp);
    }

    return (
        <div className={styles['form-container']}>
            <div className={styles.form}>
                {
                    isSignUp? <SignUp /> : <SignIn />
                }
                <div className={styles.account} onClick={handleAuthToggle}>
                    {isSignUp ? (
                        <span className={styles['account-txt']}>
                            Already have an account? <span className={styles.signIn}>Sign In</span>
                        </span>
                    ) : (
                        <span className={styles['account-txt']}>
                            Don't have an account? <span className={styles.signUp}>Sign Up</span>
                        </span>
                    )}
                </div>
            </div>
            <div className={styles['image-wrapper']}>
                <ImageSlider />
            </div>
        </div>
    )
}

export default AuthPage;

