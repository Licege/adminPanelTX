import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../api/api'

export const registration = createAsyncThunk(
  'auth/registration',
  async (user) => {
      const response = await authAPI.registration(user)
      return response.data
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (user) => {
      const response = await authAPI.login(user)
      return response.data
  }
)

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
