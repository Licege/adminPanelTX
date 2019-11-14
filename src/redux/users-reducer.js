const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE-USER';
const GET_USERS = 'GET-USERS';
const GET_USER_BY_ID = 'GET-USERS-BY-ID';

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.users };
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

export const getUsersAC = (users) => ({type: GET_USERS, users});
export const createUserAC = (user) => ({type: CREATE_USER, user});
export const changeUserAC = (user) => ({type: UPDATE_USER, user});

export default usersReducer;