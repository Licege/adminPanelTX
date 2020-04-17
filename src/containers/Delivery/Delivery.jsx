import React from 'react'
import {requestOrdersDelivery} from "../../redux/delivery-reduce";
import Delivery from "../../components/Delivery/Delivery";
import {connect} from "react-redux";

class DeliveryContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            filter: {}
        }
    }

    componentDidMount() {
        if (!this.props.orders.length) this.props.getOrders()
    }

    detail = (id) => {
        return () => {
            this.props.history.push(`/delivery/${id}`)
        }
    }

    changeFilter = () => {
        const fieldFilter = ['phone', 'payment_type', 'delivery_type', 'payment_status', 'status']

        fieldFilter.forEach(field => {
            if (document.getElementById(field).value) {
                this.state.filter[field] = document.getElementById(field).value
            } else if (!document.getElementById(field).value && this.state.filter[field]) {
                delete (this.state.filter[field])
            }
        })
        console.log(this.state.filter);
        this.props.getOrders(this.state.filter)
    }

    render() {
        return <Delivery orders={this.props.orders} detail={this.detail} changeFilter={this.changeFilter} />
    }
}

let mapStateToProps = (state) => {
    return {
        orders: state.deliveryPage.orders
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getOrders: (filter) => {
            dispatch(requestOrdersDelivery(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryContainer);