'use client';
import styles from './styles.module.scss';
import Input from '../inputs/inputs.js';
import { IoEyeOutline } from "react-icons/io5";
import Button from '../button/button.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInApi } from '../../utilities/api/signup-signinAPI.js';
import { IoAlertCircleOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { signIn, signOut } from '../../utilities/state/slices/signInSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const schema = yup.object({
    email: yup.string().required('Please enter your email address!').email('Please enter a valid email address!'),
    password: yup.string().required('Please enter your password!').min(8, 'Password must be at least 8 characters!')
});

const SignIn = () => {
    const [newEmail, setNewEmail] = useState("");
    const dispatch = useDispatch();

    const email = useSelector((state) => state.userSignIn.value.email);
    const isAuthenticated = useSelector((state) => state.userSignIn.value.isAuthenticated);

    const emailHandler = (e) => {
        setNewEmail(e.target.value);
        console.log(e.target.value);
    }

    const { handleSubmit, register, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const formSubmit = async (data) => {
        console.log('Submitting form data:', data);
        try {
            // const result = await signInApi(data);
            // console.log('sucess submit',result);
            dispatch(signIn({ email: data.email }));
            console.log('Success submit', { email: data.email, isAuthenticated: isAuthenticated});
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    }

    useEffect(() => {
        console.log('Current state:', { email, isAuthenticated });
    }, [email, isAuthenticated]);

    return (
        <div className={styles['signin-form']}>
            <div className={styles['inner-container']}>
                <div className={styles['titles-wrapper']}>
                {isAuthenticated && <p>Welcome, {email}</p>}
                <h2 className={styles.title}>Welcome Back!</h2>
                <p className={styles.desc}>Been a while! Ready to dive back in? Let's get you signed in and back to business!</p>
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
                    <Input 
                        type='email'
                        id='email'
                        label='Email Adress'
                        placeholder='Enter your email address'
                        register={{...register('email')}}
                        errorMessage={errors.email?.message}
                        errorIcon={<IoAlertCircleOutline />}
                        onChange={emailHandler}
                    />
                    <Input
                        type='password'
                        id='password'
                        label='Password'
                        placeholder='Enter your password'
                        icon={<IoEyeOutline />}
                        register={{...register('password')}}
                        errorMessage={errors.password?.message}
                        errorIcon={<IoAlertCircleOutline />}
                    />
                    <Button className={styles['signin-btn']}>
                        Sign in
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;