import {vacancyAPI} from "../api/api";


const CREATE_VACANCY = 'CREATE_VACANCY';
const GET_VACANCIES = 'GET_VACANCIES';
const GET_VACANCY_BY_ID = 'GET_VACANCY_BY_ID';
const UPDATE_VACANCY = 'UPDATE_VACANCY';
const CLOSE_VACANCY = 'CLOSE_VACANCY';
const DELETE_VACANCY = 'DELETE_VACANCY';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    vacancies: [],
    newVacancy: null,
    currentVacancy: null,
    isFetching: false
};

const vacanciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_VACANCY: {
            return { ...state, vacancies: [...state.vacancies, action.vacancy]};
        }
        case GET_VACANCIES: {
            return { ...state, vacancies: action.vacancies};
        }
        case GET_VACANCY_BY_ID: {
            return { ...state, currentVacancy: action.vacancy};
        }
        case UPDATE_VACANCY: {
            return { ...state, vacancies: state.vacancies.map(vacancy => vacancy._id === action.vacancy._id ? action.vacancy : vacancy)};
        }
        case CLOSE_VACANCY: {
            return ;
        }
        case DELETE_VACANCY:
            return { ...state, vacancies: state.vacancies.filter(e => e._id !== action.id) };
        default:
            return state;
    }
};

const createVacancyAC = (vacancy) => ({type: CREATE_VACANCY, vacancy});
const getVacanciesAC = (vacancies) => ({type: GET_VACANCIES, vacancies});
const getVacancyById = (vacancy) => ({type: GET_VACANCY_BY_ID, vacancy});
const updateVacancyAC = (vacancy) => ({type: UPDATE_VACANCY, vacancy});
const closeVacancyAC = (id) => ({type: CLOSE_VACANCY, id});
const deleteVacancyAC = (id) => ({type: DELETE_VACANCY, id});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const requestVacancies = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await vacancyAPI.getVacancies();
        dispatch(toggleIsFetching(false));
        dispatch(getVacanciesAC(response.data))
    }
};

export const requestVacancy = (id) => async(dispatch) => {
    let response = await vacancyAPI.getVacancy(id)
    dispatch(getVacancyById(response.data))
}

export const createNewVacancy = (vacancy) => async(dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await vacancyAPI.createVacancy(vacancy);
    dispatch(toggleIsFetching(false));
    dispatch(createVacancyAC(response.data));
};

export const updateVacancy = (vacancy, id) => async(dispatch) => {
    let response = await vacancyAPI.updateVacancy(vacancy, id)
    dispatch(updateVacancyAC(response.data))
}

export const deleteVacancy = (id) => async(dispatch) => {
    let response = await vacancyAPI.deleteVacancy(id);
    if (response.status === 200) {
        dispatch(deleteVacancyAC(id))
    }
};

export default vacanciesReducer;