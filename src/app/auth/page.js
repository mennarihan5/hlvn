'use client'
import styles from './styles.module.scss';
import SignIn from '../components/signInForm/signInForm.js';
import SignUp from '../components/signUpForm/signUpForm.js';
import ImageSlider from '../components/imageSlider/imageSlider.js';
import { useState } from 'react';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const HandleAuthToggle = (mode) => {
        setIsSignUp(!isSignUp);
    }

    return (
        <div className={styles['form-container']}>
            <div className={styles.form}>
                {
                    isSignUp? <SignUp /> : <SignIn />
                }
                <button onClick={HandleAuthToggle}>
                    {isSignUp ? 'Already Have an account? Sign In' : 'Don\'t have an account? Sign Up'}
                </button>
            </div>
            <div className={styles['image-wrapper']}>
                <ImageSlider />
            </div>
        </div>
    )
}

export default AuthPage;

