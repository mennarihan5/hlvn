'use client';

import styles from './styles.module.scss';
import CalcInputs from '../calcInputs/calcInputs';
import { useDispatch, useSelector } from 'react-redux';
import CustomDropdown from '../customDropdown/customDropdown';
import { setQuantityCalc } from '@/app/utilities/state/slices/quantitySlice';

const PackContent = () => {
  const formData = useSelector((state) => state.quantityCalculator.value);
  const showResults = useSelector((state) => state.quantityCalculator.showResults);
  const dispatch = useDispatch();
  
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

  return (
    <div className={styles['pack-content-container']}>
    <h3 className={styles['contents-title']}>Pack content</h3>
    <div className={styles['inputs-wrapper']}>
      <div className={styles['inputs-row']}>
        <div className={styles['input-wrapper']}>
            <CalcInputs
              label= "Drug Name"
              type= "text"
              name= "drugName"
              className= {styles['drug-name-input']}
              placeholder= "Panadol"
              value= {formData.drugName}
              onChange={handleChange}
              />
          </div>
            <div className={styles['input-wrapper']}>
              <CalcInputs
                label= "Units per Pack"
                type= "number"
                name= "unitPerPack"
                className= {styles.input}
                placeholder= "0"
                value= {formData.unitPerPack}
                onChange={handleChange}
                />
                <CustomDropdown
                name="unitPerPackType"
                value={formData.unitPerPackType}
                options={['Vials', 'Ampoules', 'Bottles', 'Other']}
                onChange={handleChange}
                className= {styles['units-per-pack']}
                selectTitleClassName={styles['select-title']}
                />
            </div>
            <div className={styles['input-wrapper']}>
              <CalcInputs
                label= "Unit Concentration"
                type= "number"
                name= "unitConcentration"
                className= {styles.input}
                placeholder= "0"
                value= {formData.unitConcentration}
                onChange={handleChange}
                />
                <CustomDropdown
                name="unitConcentrationType"
                value={formData.unitConcentrationType}
                options={['cm', 'kg', 'mg per ml']}
                onChange={handleChange}
                className= {styles['units-concen']}
                selectTitleClassName={styles['select-title']}
                />
          </div>
      </div>
      <div className={styles['inputs-row2']}>
        <div className={styles['input-wrapper']}>
            <CalcInputs
              label= "Unit Size (ml)"
              type= "number"
              name= "unitSize"
              className= {styles['unit-size-input']}
              placeholder= "0"
              value= {formData.unitSize}
              onChange={handleChange}
              />
          </div>
          <div className={styles['toggle-btn-wrapper']}>
            <input type='checkbox' className={styles['toggle-btn']}/>
            <p className={styles['toggle-btn-text']}>Units can be divided in dispensing/administration?</p>
          </div>
      </div>
</div>
   {console.log(formData)}
</div>
  )
}

export default PackContent;