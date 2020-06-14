import React from 'react'
import {connect} from "react-redux";
import Banquet from "../../components/Banquets/Banquets";

class BanquetsContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return <Banquet />
    }
}

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps) (BanquetsContainer)