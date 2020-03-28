import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Home from "../../components/Home/Home";

class HomeContainer extends React.Component{
    componentDidMount() {
    }

    render() {
        return <Home />;
    }
}

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

export default compose(connect(mapStateToProps, mapDispatchToProps)) (HomeContainer);