import {menuAPI} from "../api/api";

const GET_DISHES = 'GET_DISHES';
const GET_DISH_BY_ID = 'GET_DISH_BY_ID';
const CREATE_DISH = 'CREATE_DISH';
const UPDATE_DISH = 'UPDATE_DISH';
const DELETE_DISH = 'DELETE_DISH';

const GET_CATEGORIES = 'GET_CATEGORIES';

let initialState = {
    dish: {},
    dishes: [],
    categories: []
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DISH:
            return { ...state, dishes: [ ...state.dishes, action.dish] };

        case GET_DISHES:
            return { ...state, dishes: action.dishes };

        case GET_DISH_BY_ID:
            return { ...state, dish: action.dish };

        case UPDATE_DISH:
            return { ...state, dishes: state.dishes.filter(e => (e.id === action.dish.id ? action.dish : e)) };

        case DELETE_DISH:
            return { ...state, dishes: state.dishes.filter(e => e.id !== action.id )};

        case GET_CATEGORIES:
            return { ...state, categories: action.categories };

        default:
            return state;
    }
};

export const createDishAC = (dish) => ({type: CREATE_DISH, dish});
export const getDishesAC = (dishes) => ({type: GET_DISHES, dishes});
export const getDishByIdAC = (dish) => ({type: GET_DISH_BY_ID, dish});
export const updateDishAC = (dish) => ({type: UPDATE_DISH, dish});
export const deleteDishAC = (id) => ({type: DELETE_DISH, id});
export const getCategoriesAC = (categories) => ({type: GET_CATEGORIES, categories});


export const createDish = (dish) => async (dispatch) => {
    let response = await menuAPI.createDish(dish);
    dispatch(createDishAC(response.data));
};

export const requestDishes = () => async (dispatch) => {
    let response = await menuAPI.getDishes();
    dispatch(getDishesAC(response.data));
};

export const requestCategories = () => {
    return async (dispatch) => {
        let response = await menuAPI.getCategories();
        dispatch(getCategoriesAC(response.data));
    }
};

export const deleteDish = (id) => async (dispatch) => {
    let response = await menuAPI.deleteDish(id);
    dispatch(deleteDishAC(id));
};


export default menuReducer;