import {deliveryAPI} from "../api/api";

const GET_ORDERS = 'DELIVERY/GET_ORDERS'
const GET_ORDER_BY_ID = 'DELIVERY/GET_ORDER_BY_ID'
const UPDATE_ORDER = 'DELIVERY/UPRATE_ORDER'
const SET_CURRENT_PAGE = 'DELIVERY/SET_CURRENT_PAGE'

const ADD_DISH_INTO_LIST = 'DELIVERY/ADD_DISH_INTO_LIST'
const CHANGE_ORDERS_LIST = 'DELIVERY/CHANGE_ORDERS_LIST'
const REMOVE_DISH_FROM_LIST = 'DELIVERY/REMOVE_DISH_FROM_LIST'

let initialState = {
    orders: [],
    totalCount: null,
    currentOrder: null,
    currentPage: 1
}

const deliveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {...state, orders: action.orders, totalCount: action.totalCount}
        case GET_ORDER_BY_ID:
            return {...state, currentOrder: action.order}
        case UPDATE_ORDER:
            return  {...state, orders: state.orders.map(order => order._id === action.order._id ? action.order : order)}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case ADD_DISH_INTO_LIST:
            const dish = {
                _id: action.dish._id,
                title: action.dish.title,
                cost: action.dish.cost,
                count: action.dish.count
            }
            return {...state, currentPage: {...state.currentPage, list: state.currentPage.list.push(dish), total_price: state.currentPage.total_price + (dish.cost * dish.count)}}
        default:
            return {...state}
    }
}

const getOrdersAC = (orders, totalCount) => ({type: GET_ORDERS, orders, totalCount})
const getOrderByIdAC = (order) => ({type: GET_ORDER_BY_ID, order})
const updateOrderAC = (order) => ({type: UPDATE_ORDER, order})
const setPageAC = (page) => ({type: SET_CURRENT_PAGE, page})

const addDishIntoListAC = (dish) => ({type: ADD_DISH_INTO_LIST, dish})


export const requestOrdersDelivery = (filter, page = 1) => async(dispatch) => {
    let response = await deliveryAPI.getOrders(filter, page)
    dispatch(getOrdersAC(response.data.delivery, response.data.total_count))
}

export const requestOrderDeliveryById = (id) => async(dispatch) => {
    let response = await deliveryAPI.getOrderById(id)
    dispatch(getOrderByIdAC(response.data))
}

export const updateOrderDelivery = (order) => async(dispatch) => {
    let response = await deliveryAPI.updateOrder(order)
    dispatch(updateOrderAC(response.data))
}

export default deliveryReducer;