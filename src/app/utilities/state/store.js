import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/authSlice';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})

export default store;