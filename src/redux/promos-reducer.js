import { promoAPI } from '../api/api'

const GET_PROMOS = 'PROMOS/GET_PROMOS'
const GET_PROMO = 'PROMOS/GET_PROMO'
const POST_PROMO = 'PROMOS/POST_PROMO'
const UPDATE_PROMO = 'PROMOS/UPDATE_PROMO'

let initialState = {
    promos: [],
    currentPromo: null,

}

const promosReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_PROMOS:
            return { ...state, promos: action.promos }
        case GET_PROMO:
            return { ...state, currentPromo: action.promo }
        case POST_PROMO:
            return { ...state, promos: [ ...state.promos, action.promo ] }
        case UPDATE_PROMO:
            return {
                ...state,
                promos: state.promos.map(promo => promo.id === action.promo.id ? action.promo : promo),
            }
        default:
            return state
    }
}

const getPromosAC = ( promos ) => ({ type: GET_PROMOS, promos })
const getPromoAC = ( promo ) => ({ type: GET_PROMO, promo })
const postPromoAC = ( promo ) => ({ type: POST_PROMO, promo })
const updatePromoAC = ( promo ) => ({ type: UPDATE_PROMO, promo })

export const requestPromos = () => async ( dispatch ) => {
    let response = await promoAPI.getPromos()
    dispatch(getPromosAC(response.data))
}

export const requestPromoById = ( id ) => async ( dispatch ) => {
    let response = await promoAPI.getPromo(id)
    dispatch(getPromoAC(response.data))
}

export const postPromo = ( promo ) => async ( dispatch ) => {
    let response = await promoAPI.postPromo(promo)
    dispatch(postPromoAC(response.data))
}

export const updatePromo = ( promo, id ) => async ( dispatch ) => {
    let response = await promoAPI.updatePromo(promo, id)
    dispatch(updatePromoAC(response.data))
}

export default promosReducer
