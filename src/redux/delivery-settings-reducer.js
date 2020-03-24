import {deliveryGlobalSettingsAPI, deliverySettingsAPI} from "../api/api";

const GET_GLOBAL_DELIVERY_SETTINGS = 'GET_GLOBAL_DELIVERY_SETTINGS';
const UPDATE_GLOBAL_DELIVERY_SETTINGS = 'UPDATE_GLOBAL_DELIVERY_SETTINGS';

const GET_DELIVERY_SETTINGS = 'GET_DELIVERY_SETTINGS';
const CREATE_DELIVERY_SETTINGS = 'CREATE_DELIVERY_SETTINGS';
const UPDATE_DELIVERY_SETTINGS = 'UPDATE_DELIVERY_SETTINGS';
const DELETE_DELIVERY_SETTINGS = 'DELETE_DELIVERY_SETTINGS';

let initialState = {
    global_settings: {},
    settings: []
};

const deliverySettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GLOBAL_DELIVERY_SETTINGS:
            return { ...state, global_settings: action.settings };
        case UPDATE_GLOBAL_DELIVERY_SETTINGS:
            return { ...state, global_settings: action.settings };
        case GET_DELIVERY_SETTINGS:
            return { ...state, settings: action.settings };
        case CREATE_DELIVERY_SETTINGS:
            return { ...state, settings: [ ...state.settings, action.settings ] };
        case UPDATE_DELIVERY_SETTINGS:
            return { ...state, settings: state.settings.filter(s => (s.id === action.settings.id ? action.settings : s)) };
        case DELETE_DELIVERY_SETTINGS:
            return { ...state, settings: state.settings.filter(s => s.id !== action.id) };
        default:
            return state;
    }
};

const getGlobalDeliverySettingsAC = (settings) => ({type: GET_GLOBAL_DELIVERY_SETTINGS, settings});
const updateGlobalDeliverySettingsAC = (settings) => ({type: UPDATE_GLOBAL_DELIVERY_SETTINGS, settings});

const getDeliverySettingsAC = (settings) => ({type: GET_DELIVERY_SETTINGS, settings});
const createDeliverySettingsAC = (settings) => ({type: CREATE_DELIVERY_SETTINGS, settings});
const updateDeliverySettingsAC = (settings) => ({type: UPDATE_DELIVERY_SETTINGS, settings});
const deleteDeliverySettingsAC = (id) => ({type: DELETE_DELIVERY_SETTINGS, id});

export const requestGlobalDeliverySettings = () => async(dispatch) => {
    let response = await deliveryGlobalSettingsAPI.getSettings();
    dispatch(getGlobalDeliverySettingsAC(response.data))
};

export const updateGlobalDeliverySettings = (settings) => async(dispatch) => {
    let response = await deliveryGlobalSettingsAPI.updateSettings(settings);
    dispatch(updateGlobalDeliverySettingsAC(response.data))
};

export const requestDeliverySettings = () => async(dispatch) => {
    let response = await deliverySettingsAPI.getSettings();
    dispatch(getDeliverySettingsAC(response.data));
};

export const createDeliverySettings = (settings) => async(dispatch) => {
    let response = await deliverySettingsAPI.createSettings(settings);
    dispatch(createDeliverySettingsAC(response.data))
};

export const updateDeliverySettings = (settings) => async(dispatch) => {
    let response = await deliverySettingsAPI.updateSettings(settings);
    dispatch(updateDeliverySettingsAC(response.data))
};

export const deleteDeliverySettings = (id) => async(dispatch) => {
    let response = await deliverySettingsAPI.deleteSettings(id);
    dispatch(deleteDeliverySettingsAC(id))
};

export default deliverySettingsReducer;

