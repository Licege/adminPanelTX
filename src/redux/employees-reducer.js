const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
const UPDATE_EMPLOYEE = 'UPDATE-EMPLOYEE';
const DELETE_EMPLOYEE = 'DELETE-EMPLOYEE';
const GET_EMPLOYEES = 'GET_EMPLOYEES';
const GET_EMPLOYEE_BY_ID = 'GET-EMPLOYEE-BY-ID';

let initialState = {
    employees: []
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return { ...state, employees: action.employees };
        case GET_EMPLOYEE_BY_ID:

            return state;

        case CREATE_EMPLOYEE:
            let newEmployees = {
                name: "Маша",
                surname: "Немаша",
                email: "neMashaYa@masha.ne",
                phone: "+79091234567"
            };

            return { ...state,
                employees: [...state, newEmployees]
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

export const getEmployeesAC = (employees) => ({type: GET_EMPLOYEES, employees});
export const createEmployeeAC = (employee) => ({type: CREATE_EMPLOYEE, employee});
export const changeEmployeeAC = (employee) => ({type: UPDATE_EMPLOYEE, employee});

export default employeesReducer;