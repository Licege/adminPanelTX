import { ordersAPI } from '../api/api'

const GET_ORDERS = 'GET_ORDERS'

let initialState = {
    orders: [],
}

const ordersReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_ORDERS:
            return { ...state, orders: action.orders }
        default:
            return state
    }
}

const getOrdersAC = ( orders ) => ({ type: GET_ORDERS, orders })

export const requestOrders = () => async ( dispatch ) => {
    let response = await ordersAPI.getOrders()
    dispatch(getOrdersAC(response.data))
}

export default ordersReducer
