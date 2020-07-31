import { employeesAPI } from '../api/api'
import { checkStatus } from '../plugins/checkStatus'

const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE'
const UPDATE_EMPLOYEE = 'UPDATE-EMPLOYEE'
const DELETE_EMPLOYEE = 'DELETE-EMPLOYEE'
const GET_EMPLOYEES = 'GET_EMPLOYEES'
const GET_EMPLOYEE_BY_ID = 'GET-EMPLOYEE-BY-ID'

const GET_PROFESSIONS = 'GET_PROFESSIONS'

let initialState = {
    newEmployee: null,
    currentEmployee: null,
    employees: [],
    professions: [],
}

const employeesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return { ...state, employees: action.employees }

        case GET_EMPLOYEE_BY_ID:
            return { ...state, currentEmployee: action.currentEmployee }

        case CREATE_EMPLOYEE:
            return { ...state, employees: [ ...state.employees, action.profile ] }

        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(e => (e.id === action.profile.id ? action.profile : e)),
            }

        case DELETE_EMPLOYEE:
            return { ...state, employees: state.employees.filter(e => e.id !== action.id) }

        case GET_PROFESSIONS:
            return { ...state, professions: action.professions }

        default:
            return state
    }
}

export const createEmployeeAC = ( profile ) => ({ type: CREATE_EMPLOYEE, profile })
export const getEmployeesAC = ( employees ) => ({ type: GET_EMPLOYEES, employees })
export const getEmployeesById = ( currentEmployee ) => ({ type: GET_EMPLOYEE_BY_ID, currentEmployee })
export const updateEmployeeAC = ( profile ) => ({ type: UPDATE_EMPLOYEE, profile })
export const deleteEmployeeAC = ( id ) => ({ type: DELETE_EMPLOYEE, id })
export const getProfessionsAC = ( professions ) => ({ type: GET_PROFESSIONS, professions })


export const requestEmployees = () => async ( dispatch ) => {
    let response = await employeesAPI.getEmployees()
    if (checkStatus(response.status)) {
        dispatch(getEmployeesAC(response.data))
    }
}

export const requestProfessions = () => async ( dispatch ) => {
    let response = await employeesAPI.getProfessions()
    if (checkStatus(response.status)) {
        dispatch(getProfessionsAC(response.data))
    }
}

export const createNewEmployee = ( profile ) => async ( dispatch ) => {
    let response = await employeesAPI.createEmployee(profile)
    if (checkStatus(response.status)) {
        dispatch(createEmployeeAC(response.data))
    }
}

export const requestCurrentEmployee = ( id ) => async ( dispatch ) => {
    let response = await employeesAPI.getEmployeeById(id)
    if (checkStatus(response.status)) {
        dispatch(getEmployeesById(response.data))
    }
}

export const updateCurrentEmployee = ( profile ) => async ( dispatch ) => {
    let response = await employeesAPI.updateEmployee(profile)
    if (checkStatus(response.status)) {
        dispatch(updateEmployeeAC(response.data))
    }
}

export const deleteEmployee = ( id ) => async ( dispatch ) => {
    let response = await employeesAPI.deleteEmployee(id)
    if (checkStatus(response.status)) {
        dispatch(deleteEmployeeAC(id))
    }
}

export default employeesReducer
