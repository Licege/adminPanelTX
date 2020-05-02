import {menuAPI} from "../api/api";

const GET_DISHES = 'MENU/GET_DISHES';
const GET_DISH_BY_ID = 'MENU/GET_DISH_BY_ID';
const GET_DISHES_BY_CATEGORY = 'MENU/GET_DISHES_BY_CATEGORY'
const CREATE_DISH = 'MENU/CREATE_DISH';
const UPDATE_DISH = 'MENU/UPDATE_DISH';
const DELETE_DISH = 'MENU/DELETE_DISH';

const GET_CATEGORIES = 'MENU/GET_CATEGORIES';
const GET_CATEGORY_BY_ID = 'MENU/GET_CATEGORY_BY_ID';
const CREATE_CATEGORY = 'MENU/CREATE_CATEGORY';
const UPDATE_CATEGORY = 'MENU/UPDATE_CATEGORY';
const DELETE_CATEGORY = 'MENU/DELETE_CATEGORY';

let initialState = {
    dish: null,
    dishes: [],
    category: null,
    categories: [],
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DISH:
            return {...state, dishes: [...state.dishes, action.dish]}

        case GET_DISHES:
            return {...state, dishes: action.dishes}

        case GET_DISH_BY_ID:
            return {...state, dish: action.dish}

        case GET_DISHES_BY_CATEGORY:
            return {...state, dishes: action.dishes}

        case UPDATE_DISH:
            return {...state, dishes: state.dishes.map(e => (e._id === action.dish._id ? action.dish : e))}

        case DELETE_DISH:
            return {...state, dishes: state.dishes.filter(e => e._id !== action.id)}

        case GET_CATEGORIES:
            return {...state, categories: action.categories}

        case GET_CATEGORY_BY_ID:
            return {...state, category: action.category}

        case CREATE_CATEGORY:
            return {...state, categories: [...state.categories, action.category]}

        case UPDATE_CATEGORY:
            return {...state, categories: state.categories.map(c => (c._id === action.category._id ? action.category : c))}

        case DELETE_CATEGORY:
            return {...state, categories: state.categories.filter(c => c._id !== action.id)}

        default:
            return state
    }
}

const createDishAC = (dish) => ({type: CREATE_DISH, dish})
const getDishesAC = (dishes) => ({type: GET_DISHES, dishes})
const getDishByIdAC = (dish) => ({type: GET_DISH_BY_ID, dish})
const getDishesByCategoryAC = (dishes) => ({type: GET_DISHES_BY_CATEGORY, dishes})
const updateDishAC = (dish) => ({type: UPDATE_DISH, dish})
const deleteDishAC = (id) => ({type: DELETE_DISH, id})
const getCategoriesAC = (categories) => ({type: GET_CATEGORIES, categories})
const getCategoryByIdAC = (category) => ({type: GET_CATEGORY_BY_ID, category})
const createCategoryAC = (category) => ({type: CREATE_CATEGORY, category})
const updateCategoryAC = (category) => ({type: UPDATE_CATEGORY, category})
const deleteCategoryAC = (id) => ({type: DELETE_CATEGORY, id})


export const createDish = (dish) => async (dispatch) => {
    let response = await menuAPI.createDish(dish)
    dispatch(createDishAC(response.data))
}

export const requestDishes = () => async (dispatch) => {
    let response = await menuAPI.getDishes()
    dispatch(getDishesAC(response.data))
}

export const requestDishesByCategory = (category) => async (dispatch) => {
    let response = await menuAPI.getDishesByCategory(category)
    dispatch(getDishesByCategoryAC(response.data))
}

export const requestDish = (id) => async (dispatch) => {
    let response = await menuAPI.getDish(id)
    dispatch(getDishByIdAC(response.data[0]))
}

export const updateDish = (dish, id) => async (dispatch) => {
    let response = await menuAPI.updateDish(dish, id)
    dispatch(updateDishAC(response.data))
}

export const deleteDish = (id) => async (dispatch) => {
    let response = await menuAPI.deleteDish(id)
    dispatch(deleteDishAC(id))
}

export const requestCategories = () => async (dispatch) => {
    let response = await menuAPI.getCategories()
    dispatch(getCategoriesAC(response.data))
}

export const requestCategory = (id) => async (dispatch) => {
    let response = await menuAPI.getCategory(id)
    dispatch(getCategoryByIdAC(response.data))
}

export const createCategory = (category) => async (dispatch) => {
    let response = await menuAPI.createCategory(category)
    dispatch(createCategoryAC(response.data))
}

export const updateCategory = (category) => async (dispatch) => {
    let response = await menuAPI.updateCategory(category)
    dispatch(updateCategoryAC(response.data))
}

export const deleteCategory = (id) => async (dispatch) => {
    let response = await menuAPI.deleteCategory(id)
    dispatch(deleteCategoryAC(id))
}


export default menuReducer;