import {menuAPI} from "../api/api";

const GET_DISHES = 'MENU/GET_DISHES';
const GET_DISH_BY_ID = 'MENU/GET_DISH_BY_ID';
const GET_DISHES_BY_CATEGORY = 'MENU/GET_DISHES_BY_CATEGORY'
const CREATE_DISH = 'MENU/CREATE_DISH';
const UPDATE_DISH = 'MENU/UPDATE_DISH';
const DELETE_DISH = 'MENU/DELETE_DISH';

const GET_CATEGORIES = 'MENU/GET_CATEGORIES';

let initialState = {
    dish: null,
    dishes: [],
    categories: [],
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DISH:
            return { ...state, dishes: [ ...state.dishes, action.dish] }

        case GET_DISHES:
            return { ...state, dishes: action.dishes }

        case GET_DISH_BY_ID:
            return { ...state, dish: action.dish }

        case GET_DISHES_BY_CATEGORY:
            return { ...state, dishes: action.dishes }

        case UPDATE_DISH:
            return { ...state, dishes: state.dishes.map(e => (e._id === action.dish._id ? action.dish : e)) }

        case DELETE_DISH:
            return { ...state, dishes: state.dishes.filter(e => e._id !== action.id )}

        case GET_CATEGORIES:
            return { ...state, categories: action.categories }

        default:
            return state
    }
}

export const createDishAC = (dish) => ({type: CREATE_DISH, dish})
export const getDishesAC = (dishes) => ({type: GET_DISHES, dishes})
export const getDishByIdAC = (dish) => ({type: GET_DISH_BY_ID, dish})
const getDishesByCategoryAC = (dishes) => ({type: GET_DISHES_BY_CATEGORY, dishes})
export const updateDishAC = (dish) => ({type: UPDATE_DISH, dish})
export const deleteDishAC = (id) => ({type: DELETE_DISH, id})
export const getCategoriesAC = (categories) => ({type: GET_CATEGORIES, categories})


export const createDish = (dish) => async (dispatch) => {
    let response = await menuAPI.createDish(dish);
    dispatch(createDishAC(response.data));
}

export const requestDishes = () => async (dispatch) => {
    let response = await menuAPI.getDishes();
    dispatch(getDishesAC(response.data));
}

export const requestDishesByCategory = (category) => async(dispatch) => {
    let response = await menuAPI.getDishesByCategory(category)
    dispatch(getDishesByCategoryAC(response.data))
}

export const requestDish = (id) => async (dispatch) => {
    let response = await menuAPI.getDish(id);
    dispatch(getDishByIdAC(response.data[0]))
}

export const requestCategories = () => {
    return async (dispatch) => {
        let response = await menuAPI.getCategories();
        dispatch(getCategoriesAC(response.data));
    }
}

export const updateDish = (dish, id) => async (dispatch) => {
    let response = await menuAPI.updateDish(dish, id)
    dispatch(updateDishAC(response.data))
}

export const deleteDish = (id) => async (dispatch) => {
    let response = await menuAPI.deleteDish(id);
    dispatch(deleteDishAC(id));
}


export default menuReducer;