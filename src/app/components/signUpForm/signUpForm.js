import styles from './styles.module.scss';
import { useRef } from'react';
import Image from 'next/image';
import UploaderImg from '../../assets/images/uploader.png';
import EditInput from '../../assets/images/editInput.png';
import Input from '../inputs/inputs.js';
import { IoEyeOutline } from "react-icons/io5";
import Button from '../button/button.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signUpApi } from '../../utilities/api/signup-signinAPI.js';
import { IoAlertCircleOutline } from "react-icons/io5";

const schema = yup.object({
    fullname: yup.string().required('Please enter your full name!'),
    email: yup.string().required('Please enter your email address!').email('Please enter a valid email address!'),
    phone: yup.string().required('Please enter your phone number!').matches(/^01[0125][0-9]{8}$/, 'Please enter a valid phone number!'),
    password: yup.string().required('Please enter your password!').min(8, 'Password must be at least 8 characters!'),
    jobFunction: yup.string().required('Please enter your job function!')
});

const SignUp = () => {
    const inputRef = useRef();
    
    const { handleSubmit, register, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onBtnClick = () => {
        inputRef.current.click();
    }

    const formSubmit = async (data) => {
        console.log('Submitting form data:', data);
        try {
            const result = await signUpApi(data);
            console.log('sucess submit',result);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className={styles['sigup-form']}>
            <div className={styles['inner-container']}>
                <div className={styles['titles-wrapper']}>
                    <h2 className={styles.title}>Sign up for an account</h2>
                    <h4 className={styles.desc}>Join the future of HLVN management. Sign up now for your Wiko account!</h4>
                </div>
                <div className={styles['img-input-wrapper']}>
                    <input type='file' ref={inputRef} id='file-input' style={{display: 'none'}}/>
                    <div className={styles['upload-btn-wrapper']}>
                        <div className={styles['upload-btn']}>
                            <Image src={UploaderImg} alt='Upload Image' />
                            <Image className={styles['upload-btn-icon']} src={EditInput} alt='Upload Image' onClick={onBtnClick} />
                        </div>
                        <div className={styles['img-input-txt-wrapper']}>
                            <h4 className={styles['img-input-title']}>Organizational Logo</h4>
                            <p className={styles['img-input-text']}>Utilize a visual element such as a photo or image instead of text, and upload an image that is 132 pixels square or round.</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <Input 
                        type='text'
                        id='fullname'
                        label='Full Name'
                        placeholder='Enter your full name'
                        register={{...register('fullname')}}
                        errorMessage={errors.fullname?.message}
                        errorIcon={<IoAlertCircleOutline />}
                    />
                    <Input 
                        type='email'
                        id='email'
                        label='Email Adress'
                        placeholder='Enter your email address'
                        register={{...register('email')}}
                        errorMessage={errors.email?.message}
                        errorIcon={<IoAlertCircleOutline />}
                    />
                    <Input
                        type='tel'
                        id='phone'
                        label='Phone'
                        placeholder='Enter your Phone number'
                        register={{...register('phone')}}
                        errorMessage={errors.phone?.message}
                        errorIcon={<IoAlertCircleOutline />}
                    />
                    <div className={styles['country-wrapper']}>
                        <Input 
                            type='text'
                            id='country'
                            label='Country'
                            placeholder='Enter your country'
                            register={{...register('country')}}
                            className={styles.country}
                        />
                        <Input 
                            type='text' 
                            id='city'
                            label='City' 
                            placeholder='Enter your City'
                            register={{...register('city')}}
                            className={styles.city}
                        />  
                    </div>
                    <Input
                        type='text'
                        id='company'
                        label='Company'
                        placeholder='Enter your company name'
                        register={{...register('company')}}
                    />
                    <div className={styles['job-wrapper']}>
                        <Input
                            type='text'
                            id='jobFunction'
                            label='What’s your job function?*'
                            placeholder='Enter your job function'
                            register={{...register('jobFunction')}}
                            errorMessage={errors.jobFunction?.message}
                            errorIcon={<IoAlertCircleOutline />}
                        />
                        <Input
                            type='text'
                            id='jobRole'
                            label='what’s your job role?'
                            placeholder='Enter your job role'
                            register={{...register('jobRole')}}
                        />
                    </div>
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
                <Button className={styles['signup-btn']}>
                    Sign Up
                </Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;