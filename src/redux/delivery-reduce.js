import {deliveryAPI} from "../api/api";

const GET_ORDERS = 'DELIVERY/GET_ORDERS'

let initialState = {
    orders: []
}

const deliveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {...state, orders: action.orders}
        default:
            return {...state}
    }
}

const getOrdersAC = (orders) => ({type: GET_ORDERS, orders});

export const requestOrdersDelivery = () => async(dispatch) => {
    let response = await deliveryAPI.getOrders()
    dispatch(getOrdersAC(response.data))
}

export default deliveryReducer;