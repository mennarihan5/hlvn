import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        email: '',
        isAuthenticated: false,
        signInStatus: 'idle',
    }
}

const signInSlice = createSlice({
    name: 'userSignIn',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.value = {
                email: action.payload.email,
                isAuthenticated: true,
                signInStatus: 'success'
            }
        },
        signInFailure: (state, action) => {
            state.value.signInStatus = 'failure'
        },
        signOut: (state) => {
            state.value = {
                email: '',
                isAuthenticated: false,
                signInStatus: 'idle',
            }
        }
    }
});

export const { signIn, signOut, signInFailure } = signInSlice.actions;
export default signInSlice;