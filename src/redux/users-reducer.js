const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE-USER';
const GET_USERS = 'GET-USERS';
const GET_USER_BY_ID = 'GET-USERS-BY-ID';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.users, totalUsersCount: action.totalUsersCount };
        case SET_CURRENT_PAGE:
            console.log(action.currentPage)
            return { ...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            console.log(action.count)
            return  { ...state, totalUsersCount: action.count};
        case GET_USER_BY_ID:

            return state;

        case CREATE_USER:
            let newUser = {
                name: "Маша",
                surname: "Немаша",
                email: "neMashaYa@masha.ne",
                phone: "+79091234567"
            };

            return { ...state,
                users: [...state, newUser]
            };

        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return state //надо заменить вернуть юзера с измененеиями
                    }
                    return user; //вернули, если не нашли
                })
            };

        default:
            return state;
    }
};

export const getUsers = (users) => ({type: GET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const createUser = (user) => ({type: CREATE_USER, user});
export const changeUser = (user) => ({type: UPDATE_USER, user});

export default usersReducer;