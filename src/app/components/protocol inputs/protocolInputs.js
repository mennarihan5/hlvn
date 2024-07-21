'use client';

import styles from './styles.module.scss';
import CalcInputs from '../calcInputs/calcInputs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDropdown from '../customDropdown/customDropdown';
import { setQuantityCalc } from '@/app/utilities/state/slices/quantitySlice';

const ProtocolInputs = () => {
  const formData = useSelector((state) => state.quantityCalculator.value);
  const dispatch = useDispatch();
  const [doseCalculationMethod, setDoseCalculationMethod] = useState('perWeight');

  const handleChange = (e) => {
    const {name, value, type} = e.target;

    if (type === 'number') {
      const numericValue = value.replace(/[^0-9]/g, ""); 

      if (numericValue !== '' || !isNaN(numericValue)) {
        dispatch(setQuantityCalc({ [name]: numericValue }));
      }
    } else {
      dispatch(setQuantityCalc({[name]: value }));
    }
  };


  const handleDoseCalculationMethodChange = (e) => {
    setDoseCalculationMethod(e.target.value);
    dispatch(
      setQuantityCalc({
        calculateDoseMethod: e.target.value
      })
    );
  };

  return (
    <div className={styles['protocol-inputs-container']}>
              <h3 className={styles['protocol-title']}>Protocol inputs</h3>
              <div className={styles['inputs-row']}>
                <div className={`${styles['inputs-wrapper']} ${styles['cal-method-wrapper']}`}>
                    <label className={styles.label}>
                      How do you calculate dose?
                    </label>
                    <CustomDropdown
                    name="calculateDoseMethod"
                    value={formData.calculateDoseMethod}
                    options={['per weight', 'per surface area', 'per unit of administration']}
                    onChange={handleChange}
                    className={styles['calc-input-method']}
                    selectTitleClassName={styles['calc-method-title']}
                    selectedClassName={styles['selected-dropdown']}
                    arrowClassName={styles['arrow-icon']}
                    />
                </div>
                <div className={`${styles['input-wrapper']} ${styles['dose-per-wrapper']}`}>
                    <CalcInputs
                    label= "Dose per"
                    labelClassName={styles['dose-per-label']}
                    type= "number"
                    name= "dosePer"
                    className= {`${styles['calc-input']} ${styles['dose-per-input']}`}
                    placeholder= "0"
                    value= {formData.dosePer}
                    onChange={handleChange}
                    disabled={doseCalculationMethod !== "perWeight" && doseCalculationMethod !== "perSurface"}
                    />
                    <CustomDropdown
                    name="dosePerType"
                    value={formData.dosePerType}
                    options={['cm', 'kg']}
                    onChange={handleChange}
                    className={styles['dose-per-type']}
                    selectTitleClassName={styles['select-title']}
                    />
                </div>
              </div>
             <div className={styles['inputs-row']}>
                <div className={styles['input-wrapper']}>
                      <CalcInputs
                      label= "Average dose weight per patient"
                      type= "number"
                      name= "avgDoseWeight"
                      className= {styles['avg-dose-input']}
                      placeholder= "0"
                      value= {formData.avgDoseWeight}
                      onChange={handleChange}
                      disabled={doseCalculationMethod !== 'perWeight'}
                      />
                  </div>
                  <div className={styles['input-wrapper']}>
                      <CalcInputs
                      label= "Average body surface area per patient"
                      type= "number"
                      name= "avgBodySurfaceArea"
                      className= {styles['avg-body-input']}
                      placeholder= "0"
                      value= {formData.avgBodySurfaceArea}
                      onChange={handleChange}
                      disabled={doseCalculationMethod !== 'perSurface'}
                      />
                  </div>
             </div>
             <div className={`${styles['inputs-row']} ${styles['row-3']}`}>
                <div className={styles['input-wrapper']}>
                      <CalcInputs
                      label= "Every"
                      type= "number"
                      name= "every"
                      className= {styles['every-input']} 
                      placeholder= "0"
                      value= {formData.every}
                      onChange={handleChange}
                      />
                  </div>
                  <div className={styles['input-wrapper']}>
                      <CalcInputs
                        label= "Administration Frequency in"
                        type= "number"
                        name= "adminFreq"
                        className= {styles['admin-freq-input']}
                        placeholder= "0"
                        value= {formData.adminFreq}
                        onChange={handleChange}
                      />
                      <CustomDropdown
                      name="adminFrequencyType"
                      value={formData.adminFrequencyType}
                      options={['Hours', 'Days', 'Weeks', 'Months', 'Years']}
                      onChange={handleChange}
                      className={styles['admin-freq-type']}
                      selectTitleClassName={styles['select-title']}
                      />
                  </div>
                  <div className={styles['input-wrapper']}>
                      <CalcInputs
                        label= "For"
                        type= "number"
                        name= "cyclesNum"
                        className= {styles['cycles-num-input']} 
                        placeholder= "0"
                        value= {formData.cyclesNum}
                        onChange={handleChange}
                      />
                      <CustomDropdown
                      name="cyclesNumType"
                      value={formData.cyclesNumType}
                      options={['Number of cycles', 'Life']}
                      onChange={handleChange}
                      className={styles['cycles-num-type']}
                      selectTitleClassName= {styles['selected-cycles-num']}
                      />
                  </div>
             </div>
              <div className={`${styles['inputs-wrapper']} ${styles['cycle-duration-wrapper']}`}>
                  <label className={styles.label}>
                  Administration duration / Cycle duration
                  </label>
                  <CustomDropdown
                  name="cycleDuration"
                  value={formData.cycleDuration}
                  label= "Administration duration / Cycle duration"
                  options={['Days', 'Weeks', 'Months', 'Years', 'Life long']}
                  onChange={handleChange}
                  className={styles['cycle-duration-input']}
                  selectTitleClassName={styles['cycle-duration-title']}
                  selectedClassName={styles['selected-dropdown']}
                  arrowClassName={styles['arrow-icon']}
                  />
              </div>
              {console.log(formData)}
           </div>
  )
}

export default ProtocolInputs;