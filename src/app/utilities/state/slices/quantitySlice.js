import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        drugName: '',
        unitPerPack: '',
        unitPerPackType: '',
        unitConcentration: '',
        unitConcentrationType: '',
        unitSize: '',
        calculateDoseMethod: '',
        dosePer: '',
        dosePerType: '',
        avgDoseWeight: '',
        avgBodySurfaceArea: '',
        every: '',
        adminFreq: '',
        adminFreqType: '',
        cyclesNum: '',
        cyclesNumType: '',
        cycleDuration: '',
    },
    showResults: false,
};

const quantitySlice = createSlice({
    name: 'quantityCalculator',
    initialState,
    reducers: {
        setQuantityCalc: (state, action) => {
            state.value = {
                ...state.value, 
                ...action.payload
            }
        },
        // toggleShowResults: (state) => {
        //     state.showResults = !state.showResults;
        // }
        showResults: (state) => {
            state.showResults = true;
        },
        hideResults: (state) => {
            state.showResults = false;
        }
    }
});

export const {setQuantityCalc, showResults, hideResults } = quantitySlice.actions;
export default quantitySlice;