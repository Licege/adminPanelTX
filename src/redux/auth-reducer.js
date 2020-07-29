import { authAPI } from '../api/api'

const REGISTRATION = 'AUTH/REGISTRATION'
const LOGIN = 'AUTH/LOGIN'
const LOGOUT = 'AUTH/LOGOUT'

let initialState = {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    isAuthenticated: false,
}

const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case REGISTRATION:
            return state
        case LOGIN:
            localStorage.setItem('accessToken', action.data.accessToken)
            localStorage.setItem('refreshToken', action.data.refreshToken)
            return {
                ...state,
                isAuthenticated: true,
            }
        case LOGOUT:
            localStorage.clear()
            return { ...state, isAuthenticated: false }
        default:
            return state
    }
}

const registrationAC = ( user ) => ({ type: REGISTRATION, user })
const loginAC = ( data ) => ({ type: LOGIN, data })
export const logoutAC = () => ({ type: LOGOUT })

export const registration = ( user ) => async ( dispatch ) => {
    await authAPI.registration(user)
    dispatch(registrationAC(user.data))
}

export const login = ( user ) => async ( dispatch ) => {
    let response = await authAPI.login(user)
    dispatch(loginAC(response.data))
}

export default authReducer
