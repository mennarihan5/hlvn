import { useState } from 'react';
import styles from './styles.module.scss';
import { IoIosArrowDown } from "react-icons/io";

const Results = () => {
    const [showResults, setShowResults] = useState(true);

    const handleShowResults = () => {
        setShowResults(!showResults);
    }
  return (
    <div className={styles['results-container']}>
        <div className={styles['title-wrapper']}>
            <h3 className={styles['results-title']}>Result</h3>
            <div className={styles['arrow-icon']} onClick={handleShowResults}>
                <IoIosArrowDown />
            </div>
        </div>
        {
            showResults && (
                <div className={styles.results}>
                    <div className={styles['result-item']}>
                        <p className={styles['result-title']}>1- Regimen / protocol check :</p>
                    </div>
                    <div className={styles['result-item']}>
                        <p className={styles['result-title']}>2- Cycle length :</p>
                    </div>
                    <div className={styles['result-item']}>
                        <p className={styles['result-title']}>3- Number of doses required per regimen /year :</p>
                    </div>
                    <div className={styles['result-item']}>
                        <p className={styles['result-title']}>4- Number of doses per pack :</p>
                    </div>
                    <div className={styles['result-item']}>
                        <p className={styles['result-title']}>5- Required units per regimen/year per patient:</p>
                    </div>
                    <div className={styles['result-item']}>
                        <p className={styles['result-title']}>6- Required packs per regimen/year per patient :</p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Results;