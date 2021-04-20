import { createSlice } from '@reduxjs/toolkit'
import { registration, login } from '../thunks/auth.thunks'


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
        isAuthenticated: Boolean(localStorage.getItem('accessToken')),
    },
    reducers: {
        logout: state => { state.isAuthenticated = false }
    },
    extraReducers: {
        [registration.fulfilled]: (state, action) => {},
        [login.fulfilled]: (state, action) => {
            localStorage.setItem('accessToken', action.payload.accessToken)
            localStorage.setItem('refreshToken', action.payload.refreshToken)
            state.isAuthenticated = true
        }
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
