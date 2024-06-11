import styles from './styles.module.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';
import ImgSlider1 from '../../assets/images/imgSlider1.png';
import ImgSlider2 from '../../assets/images/imgSlider2.png';
import BackgroundImg from '../../assets/images/background.png';
import Logo from '../../assets/images/logo.png';
import { useEffect, useState } from'react';

const ImageSlider = ({isSignUp}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeButton, setActiveButton] = useState(null);

    useEffect(() => {
        const newSlide = isSignUp ? 1 : 0;
        setCurrentSlide(newSlide);
        setActiveButton(newSlide === 0 ? 'back' : 'next');
    }, [isSignUp])

     const handleSlideChange = (slideIndex) => {
        setCurrentSlide(slideIndex);
        const buttonType = slideIndex === 0 ? 'back' : 'next';
        setActiveButton(buttonType);
    }

    // const btnColorHandler = (buttonType) => {
    //     setActiveButton(activeButton === buttonType ? null : buttonType);
    // };

    return (
        <div className={styles['img-slider-container']}>
            <div className={styles['inner-container']}>
                <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={2} className={styles['carousel-wrapper']} currentSlide={currentSlide}>
                    <div className={styles['logo-wrapper']}>
                        <Image className={styles.logo} src={Logo} alt='Logo' />
                    </div>
                    <Slider className={styles['img-slide-wrapper']}>
                        <Slide className={styles['img-slide1']} index={0}>
                            <Image className={styles['img-one']} src={ImgSlider1} alt='Image Slider 1' layout='fill' />
                        </Slide>
                        <Slide className={styles['img-slide2']} index={1}>
                            <Image className={styles['img-two']} src={ImgSlider2} alt='Image Slider 2' layout='fill' />
                        </Slide>
                    </Slider>
                    <div className={styles['btns-wrapper']}>
                        <ButtonBack onClick={() => handleSlideChange(0)}
                        className={`${styles['btn-back']} ${activeButton === 'back' ? styles['btn-color'] : ''}`}>
                        </ButtonBack>
                        <ButtonNext onClick={() => handleSlideChange(1)} 
                        className={`${styles['btn-next']} ${activeButton === 'next' ? styles['btn-color'] : ''}`}>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
                <div className={styles['background-img-wrapper']}>
                    <Image className={styles['background-img']} src={BackgroundImg} alt='Background Image' />
                </div>
                <div className={styles['text-container']}>
                    <h2 className={styles['text-title']}>Health Calculators</h2>
                    <p className={styles['text-desc']}>Welcome to health calculators! Whether you are a doctor, a medical student or a patient, you will find answers to your medical questions here, as well as receive a lot of scientifically proven information. What is my renal function and what does it mean? How much blood do I have? How to dose medication to children? What is my risk of having lung cancer? These are just a few examples of what you can learn! HLVN and MELD Score sound strange to you? Omni Calculator will explain these terms and help you determine your own result! Don’t hesitate, solve your medical issues with us!</p>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;
