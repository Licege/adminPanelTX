import {adminAPI} from "../api/api";

const GET_ADMINS = 'ADMIN/GET_ADMINS'
const POST_ADMIN = 'ADMIN/POST_ADMIN'

let initialState = {
    admins: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADMINS:
            return { ...state, admins: action.admins }
        case POST_ADMIN:
            return { ...state, admins: [...state.admins, action.admin]}
        default:
            return state;
    }
}

const getAdminAC = (admins) => ({type: GET_ADMINS, admins})
const addAdminAC = (admin) => ({type: POST_ADMIN, admin})

export const requestAdmins = () => async (dispatch) => {
    let response = await adminAPI.getAdmins()
    dispatch(getAdminAC(response.data))
}

export const postAdmin = (profile) => async (dispatch) => {
    let response = await adminAPI.postAdmin(profile._id)
    dispatch(addAdminAC(profile))
}

export default adminReducer;