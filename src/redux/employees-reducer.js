import {employeesAPI} from "../api/api";

const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
const UPDATE_EMPLOYEE = 'UPDATE-EMPLOYEE';
const DELETE_EMPLOYEE = 'DELETE-EMPLOYEE';
const GET_EMPLOYEES = 'GET_EMPLOYEES';
const GET_EMPLOYEE_BY_ID = 'GET-EMPLOYEE-BY-ID';

let initialState = {
    currentEmployee: null,
    employees: [],
    newEmployee: {
        name: "",
        surname: "",
        phone: "",
        address: "",
        profession: ""
    }
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return { ...state, employees: action.employees };
        case GET_EMPLOYEE_BY_ID:
            return {...state, currentEmployee: action.currentEmployee};

        case CREATE_EMPLOYEE:
            return { ...state,
                employees: [...state.employees, state.newEmployee]
            };

        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.map(employee => {
                    if (employee.id === action.id) {
                        return state //надо заменить вернуть юзера с измененеиями
                    }
                    return employee; //вернули, если не нашли
                })
            };

        default:
            return state;
    }
};

export const createEmployee = (newEmployee) => ({type: CREATE_EMPLOYEE, newEmployee});
export const getEmployeesAC = (employees) => ({type: GET_EMPLOYEES, employees});
export const getEmployeesById = (currentEmployee) => ({type: GET_EMPLOYEE_BY_ID, currentEmployee});
export const createEmployeeAC = (employee) => ({type: CREATE_EMPLOYEE, employee});
export const changeEmployeeAC = (employee) => ({type: UPDATE_EMPLOYEE, employee});


export const createNewEmployee = (newEmployee) => async (dispatch) => {
    let response = await employeesAPI.createEmployees(newEmployee);
    dispatch(createEmployee(response.data))
};

export const requestCurrentEmployee = (id) => async (dispatch) => {
    let response = await employeesAPI.getEmployeeById(id);
    dispatch(getEmployeesById(response.data));
};

export default employeesReducer;