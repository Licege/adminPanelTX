import React from 'react'
import {requestOrdersDelivery} from "../../redux/delivery-reduce";
import Delivery from "../../components/Delivery/Delivery";
import {connect} from "react-redux";

class DeliveryContainer extends React.Component{
    componentDidMount() {
        if (!this.props.orders.length) this.props.getOrders()
    }

    render() {
        return <Delivery orders={this.props.orders} />
    }
}

let mapStateToProps = (state) => {
    return {
        orders: state.deliveryPage.orders
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => {
            dispatch(requestOrdersDelivery())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryContainer);