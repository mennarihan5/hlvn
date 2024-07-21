import { configureStore } from '@reduxjs/toolkit';
import signInSlice from './slices/signInSlice';
import signUpSlice from './slices/signUpSlice';
import quantitySlice from './slices/quantitySlice';

const store = configureStore({
    reducer: {
        userSignIn: signInSlice.reducer,
        userSignUp: signUpSlice.reducer,
        quantityCalculator: quantitySlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;