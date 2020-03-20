import {usersAPI} from "../api/api";

const UPDATE_USER = 'UPDATE-USER';
const GET_USERS = 'GET-USERS';
const GET_USER_BY_ID = 'GET-USERS-BY-ID';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    currentUser: null,
    users: [],
    filters: {},
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.users};
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return  { ...state, totalUsersCount: action.count};
        case GET_USER_BY_ID:
             return { ...state, currentUser: action.currentUser};
        case UPDATE_USER:
            return { ...state, currentUser: action.currentUser};
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const getUsers = (users) => ({type: GET_USERS, users});
export const getUserById = (currentUser) => ({type: GET_USER_BY_ID, currentUser});
export const updateUser = (currentUser) => ({type: UPDATE_USER, currentUser});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});



export const requestUsers = (page) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page);
        dispatch(toggleIsFetching(false));
        dispatch(getUsers(data.users));
        dispatch(setTotalUsersCount(data.total_count));
    }
};

export const requestCurrentUser = (id) => async (dispatch) => {
    let response = await usersAPI.getUserById(id);
    dispatch(getUserById(response.data));
};

export const updateCurrentUser = (profile) => async (dispatch) => {
    let response = await usersAPI.updateUser(profile);
    dispatch(updateUser(response.data));

    //Добавить проверку

};


/*
export const requestCurrentUser = (id) => async (dispatch) => {
    const response = await usersAPI.getUserById(id);
    dispatch(getUserById(response.data));
    console.log(response)
}
*/


export default usersReducer;