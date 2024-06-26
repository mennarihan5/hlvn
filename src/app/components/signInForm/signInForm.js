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

const schema = yup.object({
    email: yup.string().required('Please enter your email address!').email('Please enter a valid email address!'),
    password: yup.string().required('Please enter your password!').min(8, 'Password must be at least 8 characters!')
});

const SignIn = () => {
    const { handleSubmit, register, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const formSubmit = async (data) => {
        console.log('Submitting form data:', data);
        try {
            const result = await signInApi(data);
            console.log('sucess submit',result);
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    }

    return (
        <div className={styles['signin-form']}>
            <div className={styles['inner-container']}>
                <div className={styles['titles-wrapper']}>
                <h2 className={styles.title}>Welcome Back!</h2>
                <p className={styles.desc}>Been a while! Ready to dive back in? Let's get you signed in and back to business!</p>
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
                    <Input 
                        type='text'
                        id='email'
                        label='Email Adress'
                        placeholder='Enter your email address'
                        register={{...register('username')}}
                        errorMessage={errors.email?.message}
                        errorIcon={<IoAlertCircleOutline />}
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