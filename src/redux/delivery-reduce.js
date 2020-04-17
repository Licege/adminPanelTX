import {deliveryAPI} from "../api/api";

const GET_ORDERS = 'DELIVERY/GET_ORDERS'
const GET_ORDER_BY_ID = 'DELIVERY/GET_ORDER_BY_ID'

let initialState = {
    orders: [],
    currentOrder: null
}

const deliveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {...state, orders: action.orders}
        case GET_ORDER_BY_ID:
            return {...state, currentOrder: action.order}
        default:
            return {...state}
    }
}

const getOrdersAC = (orders) => ({type: GET_ORDERS, orders})
const getOrderByIdAC = (order) => ({type: GET_ORDER_BY_ID, order})


export const requestOrdersDelivery = (filter) => async(dispatch) => {
    let response = await deliveryAPI.getOrders(filter)
    dispatch(getOrdersAC(response.data))
}

export const requestOrderDeliveryById = (id) => async(dispatch) => {
    let response = await deliveryAPI.getOrderById(id)
    dispatch(getOrderByIdAC(response.data))
}

export default deliveryReducer;