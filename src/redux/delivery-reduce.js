import {deliveryAPI} from "../api/api";

const GET_ORDERS = 'DELIVERY/GET_ORDERS'
const GET_ORDER_BY_ID = 'DELIVERY/GET_ORDER_BY_ID'
const SET_CURRENT_PAGE = 'DELIVERY/SET_CURRENT_PAGE'

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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        default:
            return {...state}
    }
}

const getOrdersAC = (orders, totalCount) => ({type: GET_ORDERS, orders, totalCount})
const getOrderByIdAC = (order) => ({type: GET_ORDER_BY_ID, order})
const setPageAC = (page) => ({type: SET_CURRENT_PAGE, page})


export const requestOrdersDelivery = (filter, page = 1) => async(dispatch) => {
    let response = await deliveryAPI.getOrders(filter, page)
    dispatch(getOrdersAC(response.data.delivery, response.data.total_count))
}

export const requestOrderDeliveryById = (id) => async(dispatch) => {
    let response = await deliveryAPI.getOrderById(id)
    dispatch(getOrderByIdAC(response.data))
}

export default deliveryReducer;