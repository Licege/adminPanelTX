const TOOGLE = "TOGGLE";

let initialState = {
    active: null,
};

const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE:
            console.log(state.active)
            console.log(action.active)
            return { active: state.active !== action.active ? action.active : null };
        default:
            return state;
    }
};

export const toggleAC = (active) => ({type: TOOGLE, active});

export default toggleReducer;

