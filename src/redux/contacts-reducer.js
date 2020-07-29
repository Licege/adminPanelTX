import { contactsAPI } from '../api/api'

const GET_CONTACTS = 'GET_CONTACTS'
const UPDATE_CONTACTS = 'UPDATE_CONTACTS'

let initialState = {
    contacts: {},
}

const contactsReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_CONTACTS:
            return { contacts: action.contacts }

        case UPDATE_CONTACTS:
            return { contacts: action.contacts }

        default:
            return state
    }
}

export const getContactsAC = ( contacts ) => ({ type: GET_CONTACTS, contacts })
export const updateContactsAC = ( contacts ) => ({ type: UPDATE_CONTACTS, contacts })

export const getContacts = () => async ( dispatch ) => {
    let response = await contactsAPI.getContacts()
    dispatch(getContactsAC(response.data))
}

export const updateContacts = ( contacts ) => async ( dispatch ) => {
    let response = await contactsAPI.updateContacts(contacts)
    dispatch(updateContactsAC(response.data))
}

export default contactsReducer
