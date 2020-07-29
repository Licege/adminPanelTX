import { fileAPI } from '../api/api'

const UPLOAD_FILE = 'FILE/UPLOAD_FILE'
const UPLOAD_FILE_SUCCESS = 'FILE/UPLOAD_FILE_SUCCESS'
const UPLOAD_FILE_ERROR = 'FILE/UPLOAD_FILE_ERROR'

let initialState = {
    buffer: {},
    loading: false,
    error: {},
}

const fileReducer = ( state = initialState, action ) => {
    let error

    switch (action.type) {
        case UPLOAD_FILE:
            return { ...state, loading: true }
        case UPLOAD_FILE_SUCCESS:
            error = { ...state.error }
            delete error[action.file.fieldName]
            return {
                ...state,
                loading: false,
                buffer: {
                    id: action.file._id,
                    preview: action.file.preview,
                    fieldName: action.file.fieldName,
                    type: action.data.type,
                },
            }
        case UPLOAD_FILE_ERROR:
            return {
                ...state,
                error: { ...state.error, [action.file.fieldName]: 'error', loading: false },
            }
        default:
            return state
    }
}

const uploadFileAC = () => ({ type: UPLOAD_FILE })
const uploadFileSuccessAC = ( file ) => ({ type: UPLOAD_FILE_SUCCESS, file })
const uploadFileErrorsAC = ( error ) => ({ UPLOAD_FILE_ERROR, error })

export const uploadFile = ( files ) => async ( dispatch ) => {
    dispatch(uploadFileAC())
    let response = fileAPI.uploadFile(files)
    switch (response.status) {
        case 200:
        case 201:
            dispatch(uploadFileSuccessAC(response.data))
            break
        default:
            dispatch(uploadFileErrorsAC(response.data))
    }
}

export default fileReducer

