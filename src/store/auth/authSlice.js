import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export AuthState {
//     isLoggedIn: Boolean;
//     logging?: Boolean;
//     currentUser?: [];
// }

const initialState = {
    // isLoggedIn: false,
    // logging: false,
    currentUser: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        login: (state, action) => {
            // state.logging = true
            console.log(action.payload)
            state.currentUser = action.payload
        },
        // loginSuccess: (state, action) =>{
        //     state.isLoggedIn = true,
        //     state.logging = false,
        //     state.currentUser = action.payload

        // },
        // loginFaild(state, action){
        //     state.logging = false

        // },
        logout(state){
        //    state.isLoggedIn = false,
           state.currentUser = undefined
        }
    },
})

// Actions

export const authActions = authSlice.actions;


// Selector

// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
// export const selectLogging = (state) => state.auth.logging
export const selectUser = (state) => state.auth.currentUser

// Reducer

export default authSlice ;