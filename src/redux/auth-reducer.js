import {authAPI} from "../api/api";

const REGISTRATION = 'AUTH/REGISTRATION'
const LOGIN = 'AUTH/LOGIN'
const LOGOUT = 'AUTH/LOGOUT'

let initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION:
            return state;
        case LOGIN:
            localStorage.setItem('token', action.data.token)
            return {...state, token: action.data.token, isAuthenticated: true}
        case LOGOUT:
            localStorage.clear()
            return { ...state, token: null, isAuthenticated: false }
        default:
            return state
    }
}

const registrationAC = (user) => ({type: REGISTRATION, user})
const loginAC = (data) => ({type: LOGIN, data})
export const logoutAC = () => ({type: LOGOUT})

export const registration = (user) => async(dispatch) => {
    let response = await authAPI.registration(user)
    dispatch(registrationAC(user.data))
}

export const login = (user) => async(dispatch) => {
    let response = await authAPI.login(user)
    dispatch(loginAC(response.data))
}

export default authReducer;