const TOGGLE = 'TOGGLE'

let initialState = {
    active: null,
}

const toggleReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case TOGGLE:
            return { active: state.active !== action.active ? action.active : null }
        default:
            return state
    }
}

export const toggleAC = ( active ) => ({ type: TOGGLE, active })

export default toggleReducer

