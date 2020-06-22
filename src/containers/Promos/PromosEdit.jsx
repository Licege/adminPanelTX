import React from 'react'
import {requestPromoById, updatePromo} from "../../redux/promos-reducer";
import {Promo} from "../../components/Promos/Promo";
import {connect} from "react-redux";

class PromosEdit extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id
        this.props.getPromo(id)
        document.title = 'Редактирование акции'
    }

    render() {
        let {promo, updatePromo} = this.props

        return <Promo promo={promo} updatePromo={updatePromo} />
    }
}

let mapStateToProps = (state) => {
    return {
        promo: state.promosPage.currentPromo
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getPromo: (id) => {
            dispatch(requestPromoById(id))
        },
        updatePromo: (promo, id) => {
            dispatch(updatePromo(promo, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PromosEdit)