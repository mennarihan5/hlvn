import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : {
        email: '',
        isAuthenticated: false,
        signUpStatus: 'idle'
    }
}

const signUpSlice = createSlice({
    name: 'userSignUp',
    initialState,
    reducers: {
        signUp: (state, action) => {
            state.value = {
                email: action.payload.email,
                isAuthenticated: true,
                signUpStatus:'success'
            }
        },
        signUpFailure: (state) => {
            state.value.signUpStatus = 'failure'
        }
    }
})

export const { signUp, signUpFailure } = signUpSlice.actions;
export default signUpSlice;