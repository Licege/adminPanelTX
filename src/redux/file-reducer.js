import {fileAPI} from "../api/api";

const POST_FILE = 'FILE/POST_FILE';
const DELETE_FILE = 'FILE/DELETE_FILE';

let initialState = {
    file: {
        file_id: 0,
        url: ""
    }
}

const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_FILE:
            return { ...state, file: action.file }

        case DELETE_FILE:
            return { ...state, file: {file_id: 0, url: ""} }

        default:
            return state
    }
}

const postFileAC = (file) => ({type: POST_FILE, file})
const deleteFileAC = (id) => ({type: DELETE_FILE, id})

export const postFile = (file) => async(dispatch) => {
    let response = await fileAPI.postFile(file)
    dispatch(postFileAC(response.data))
}

export const deleteFIle = (id) => async(dispatch) => {
    let response = await fileAPI.deleteFile(id)
    dispatch(deleteFileAC(id))
}

export default fileReducer;