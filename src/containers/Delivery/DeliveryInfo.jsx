import React from 'react'
import {connect} from "react-redux";
import {requestOrderDeliveryById} from "../../redux/delivery-reduce";
import DeliveryInfo from "../../components/Delivery/DeliveryInfo";

class DeliveryInfoContainer extends React.Component {
    componentDidMount() {
        if (!this.props.order) this.props.getOrder(this.props.match.params.id)
    }

    render() {
        return <DeliveryInfo order={this.props.order}/>
    }
}

let mapStateToProps = (state) => {
    return {
        order: state.deliveryPage.currentOrder
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (id) => {
            dispatch(requestOrderDeliveryById(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DeliveryInfoContainer)