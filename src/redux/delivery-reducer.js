import {deliveryAPI, deliveryGlobalSettingsAPI, deliverySettingsAPI} from "../api/api"

const GET_ORDERS = 'DELIVERY/GET_ORDERS'
const GET_ORDER_BY_ID = 'DELIVERY/GET_ORDER_BY_ID'
const UPDATE_ORDER = 'DELIVERY/UPRATE_ORDER'
const SET_CURRENT_PAGE = 'DELIVERY/SET_CURRENT_PAGE'

const ADD_DISH_INTO_LIST = 'DELIVERY/ADD_DISH_INTO_LIST'
const INCREASE_ORDERS_LIST = 'DELIVERY/INCREASE_ORDERS_LIST'
const DECREASE_ORDERS_LIST = 'DELIVERY/DECREASE_ORDERS_LIST'
const REMOVE_DISH_FROM_LIST = 'DELIVERY/REMOVE_DISH_FROM_LIST'

const GET_GLOBAL_DELIVERY_SETTINGS = 'GET_GLOBAL_DELIVERY_SETTINGS'
const UPDATE_GLOBAL_DELIVERY_SETTINGS = 'UPDATE_GLOBAL_DELIVERY_SETTINGS'

const GET_DELIVERY_SETTINGS = 'GET_DELIVERY_SETTINGS'
const GET_DELIVERY_SETTINGS_BY_ID = 'GET_DELIVERY_SETTINGS_BY_ID'
const CREATE_DELIVERY_SETTINGS = 'CREATE_DELIVERY_SETTINGS'
const UPDATE_DELIVERY_SETTINGS = 'UPDATE_DELIVERY_SETTINGS'
const DELETE_DELIVERY_SETTINGS = 'DELETE_DELIVERY_SETTINGS'

let initialState = {
    orders: [],
    totalCount: null,
    currentOrder: null,
    currentPage: 1,
    global_settings: {},
    settings: [],
    currentSettings: null,
}

const deliveryReducer = (state = initialState, action) => {
    let totalPrice = ''
    let orderList = []
    let position = {}

    const calcDeliveryCost = (price) => {
        if (state.currentOrder.delivery_type === 'home') {
            let setting = state.settings.find(s => s.city === state.currentOrder.address.city)
            if (price >= setting.free_delivery) {
                return 0
            } else return setting.price_for_delivery
        }
        return 0
    }

    switch (action.type) {
        case GET_ORDERS:
            return {...state, orders: action.orders, totalCount: action.totalCount}
        case GET_ORDER_BY_ID:
            return {...state, currentOrder: action.order}
        case UPDATE_ORDER:
            return {...state, orders: state.orders.map(order => order._id === action.order._id ? action.order : order)}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case ADD_DISH_INTO_LIST:
            position = {
                _id: action.dish._id,
                title: action.dish.title,
                cost: action.dish.cost,
                count: 1
            }

            const addDish = (item, itemList) => {
                let index = itemList.findIndex(d => d._id === item._id)
                if (index === -1) {
                    return [...state.currentOrder.list, item]
                } else {
                    let data = [...itemList]
                    data[index].count += 1
                    return data
                }
            }

            totalPrice = state.currentOrder.total_price + position.cost

            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    list: addDish(position, state.currentOrder.list),
                    total_price: totalPrice,
                    delivery_cost: calcDeliveryCost(totalPrice)
                }
            }

        case INCREASE_ORDERS_LIST:
            position = state.currentOrder.list.find(order => order._id === action.id)
            position.count += 1
            orderList = state.currentOrder.list.map(order => order._id === position._id ? position : order)
            totalPrice = state.currentOrder.total_price + position.cost

            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    list: orderList,
                    total_price: totalPrice,
                    delivery_cost: calcDeliveryCost(totalPrice)
                }
            }

        case DECREASE_ORDERS_LIST:
            position = state.currentOrder.list.find(order => order._id === action.id)
            if (position.count === 1) {
                orderList = state.currentOrder.list.filter(order => order._id !== action.id)
            } else {
                position.count -= 1
                orderList = state.currentOrder.list.map(order => order._id === action.id ? position : order)
            }
            totalPrice = state.currentOrder.total_price - position.cost

            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    list: orderList,
                    total_price: totalPrice,
                    delivery_cost: calcDeliveryCost(totalPrice)
                }
            }

        case REMOVE_DISH_FROM_LIST:
            position = state.currentOrder.list.find(order => order._id === action.id)
            totalPrice = state.currentOrder.total_price - (position.cost * position.count)

            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    list: state.currentOrder.list.filter(order => order._id !== action.id),
                    total_price: totalPrice,
                    delivery_cost: calcDeliveryCost(totalPrice)
                }
            }
        case GET_GLOBAL_DELIVERY_SETTINGS:
            return {...state, global_settings: action.settings}
        case UPDATE_GLOBAL_DELIVERY_SETTINGS:
            return {...state, global_settings: action.settings}
        case GET_DELIVERY_SETTINGS:
            return {...state, settings: action.settings}
        case GET_DELIVERY_SETTINGS_BY_ID:
            return {...state, currentSettings: action.settings}
        case CREATE_DELIVERY_SETTINGS:
            return {...state, settings: [...state.settings, action.settings]}
        case UPDATE_DELIVERY_SETTINGS:
            return {...state, settings: state.settings.map(s => (s._id === action.settings._id ? action.settings : s))}
        case DELETE_DELIVERY_SETTINGS:
            return {...state, settings: state.settings.filter(s => s._id !== action.id)}
        default:
            return {...state}
    }
}

const getOrdersAC = (orders, totalCount) => ({type: GET_ORDERS, orders, totalCount})
const getOrderByIdAC = (order) => ({type: GET_ORDER_BY_ID, order})
const updateOrderAC = (order) => ({type: UPDATE_ORDER, order})
const setPageAC = (page) => ({type: SET_CURRENT_PAGE, page})

export const addDishIntoListAC = (dish) => ({type: ADD_DISH_INTO_LIST, dish})
export const removeDishFromListAC = (id) => ({type: REMOVE_DISH_FROM_LIST, id})
export const increaseDishCountAC = (id) => ({type: INCREASE_ORDERS_LIST, id})
export const decreaseDishCountAC = (id) => ({type: DECREASE_ORDERS_LIST, id})

const getGlobalDeliverySettingsAC = (settings) => ({type: GET_GLOBAL_DELIVERY_SETTINGS, settings})
const updateGlobalDeliverySettingsAC = (settings) => ({type: UPDATE_GLOBAL_DELIVERY_SETTINGS, settings})

const getDeliverySettingsAC = (settings) => ({type: GET_DELIVERY_SETTINGS, settings})
const getDeliverySettingsByIdAC = (settings) => ({type: GET_DELIVERY_SETTINGS_BY_ID, settings})
const createDeliverySettingsAC = (settings) => ({type: CREATE_DELIVERY_SETTINGS, settings})
const updateDeliverySettingsAC = (settings) => ({type: UPDATE_DELIVERY_SETTINGS, settings})
const deleteDeliverySettingsAC = (id) => ({type: DELETE_DELIVERY_SETTINGS, id})


export const requestOrdersDelivery = (filter, page = 1) => async (dispatch) => {
    let response = await deliveryAPI.getOrders(filter, page)
    dispatch(getOrdersAC(response.data.delivery, response.data.total_count))
}

export const requestOrderDeliveryById = (id) => async (dispatch) => {
    let response = await deliveryAPI.getOrderById(id)
    dispatch(getOrderByIdAC(response.data))
}

export const updateOrderDelivery = (order) => async (dispatch) => {
    let response = await deliveryAPI.updateOrder(order)
    dispatch(updateOrderAC(response.data))
}

export const requestGlobalDeliverySettings = () => async (dispatch) => {
    let response = await deliveryGlobalSettingsAPI.getSettings();
    dispatch(getGlobalDeliverySettingsAC(response.data))
};

export const updateGlobalDeliverySettings = (settings) => async (dispatch) => {
    let response = await deliveryGlobalSettingsAPI.updateSettings(settings);
    dispatch(updateGlobalDeliverySettingsAC(response.data))
};

export const requestDeliverySettings = () => async (dispatch) => {
    let response = await deliverySettingsAPI.getSettings();
    dispatch(getDeliverySettingsAC(response.data))
};

export const requestDeliverySettingsById = (id) => async (dispatch) => {
    let response = await deliverySettingsAPI.getSettingsById(id)
    dispatch(getDeliverySettingsByIdAC(response.data))
}

export const createDeliverySettings = (settings) => async (dispatch) => {
    let response = await deliverySettingsAPI.createSettings(settings);
    dispatch(createDeliverySettingsAC(response.data))
};

export const updateDeliverySettings = (settings) => async (dispatch) => {
    let response = await deliverySettingsAPI.updateSettings(settings);
    dispatch(updateDeliverySettingsAC(response.data))
};

export const deleteDeliverySettings = (id) => async (dispatch) => {
    let response = await deliverySettingsAPI.deleteSettings(id);
    dispatch(deleteDeliverySettingsAC(id))
};

export default deliveryReducer;