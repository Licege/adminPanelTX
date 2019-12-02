import {vacancyAPI} from "../api/api";


const CREATE_VACANCY = 'CREATE_VACANCY';
const GET_VACANCIES = 'GET_VACANCIES';
const GET_VACANCY_BY_ID = 'GET_VACANCY_BY_ID';
const UPDATE_VACANCY = 'UPDATE_VACANCY';
const CLOSE_VACANCY = 'CLOSE_VACANCY';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    vacancies: [],
    currentVacancy: null,
    isFetching: false
};

const vacanciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_VACANCY: {
            return;
        }
        case GET_VACANCIES: {
            return { ...state, vacancies: action.vacancies};
        }
        case GET_VACANCY_BY_ID: {
            return { ...state, currentVacancy: action.vacancy};
        }
        case UPDATE_VACANCY: {
            return { ...state, currentVacancy: action.vacancy};
        }
        case CLOSE_VACANCY: {
            return;
        }
        default:
            return state;
    }
};

export const createVacancy = (vacancy) => ({type: CREATE_VACANCY, vacancy});
export const getVacancies = (vacancies) => ({type: GET_VACANCIES, vacancies});
export const getVacancyById = (vacancy) => ({type: GET_VACANCY_BY_ID, vacancy});
export const updateVacancy = (vacancy) => ({type: UPDATE_VACANCY, vacancy});
export const closeVacancy = (id) => ({type: CLOSE_VACANCY, id});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const requestVacancies = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await vacancyAPI.getVacancies();
        dispatch(toggleIsFetching(false));
        dispatch(getVacancies(data.data))
    }
};

export default vacanciesReducer;