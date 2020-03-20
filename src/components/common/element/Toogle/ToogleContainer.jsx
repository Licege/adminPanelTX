import React from 'react';
import {toggleAC} from "../../../../redux/toogle-reducer";
import {connect} from "react-redux";
import Toggle from "./Toggle";

class ToogleContainer extends React.Component{
    render() {
        return <Toggle />
    }
}

let mapStateToProps = (state) => {
    return {
        active: state.toggleComponent.active
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        toggle: (active) => {
            dispatch(toggleAC(active))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ToogleContainer);