import React from 'react'
import {connect} from "react-redux";
import Promos from "../../components/Promos/Promos";
import {requestPromos} from "../../redux/promos-reducer";

class PromosContainer extends React.Component {
    componentDidMount() {
        if (!this.props.promos.length) this.props.getPromos()
    }

    newPromo = () => {
        this.props.history.push(`promos/new`)
    }

    render() {
        return <Promos promos={this.props.promos} newPromo={this.newPromo} />
    }
}

let mapStateToProps = (state) => {
    return {
        promos: state.promosPage.promos
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getPromos: () => {
            dispatch(requestPromos())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PromosContainer);