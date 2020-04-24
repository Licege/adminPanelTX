import React from 'react'
import {connect} from "react-redux";
import {requestOrderDeliveryById, updateOrderDelivery} from "../../redux/delivery-reduce";
import DeliveryInfo from "../../components/Delivery/DeliveryInfo";

class DeliveryInfoContainer extends React.Component {
    componentDidMount() {
        this.props.getOrder(this.props.match.params.id)
    }

    update = (order) => {
        this.props.updateOrder(order)
        this.props.history.push('/delivery')
    }

    render() {
        return <DeliveryInfo order={this.props.order} onSubmit={this.update} initialValues={this.props.order} />
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
        },
        updateOrder: (order) => {
            dispatch(updateOrderDelivery(order))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryInfoContainer)