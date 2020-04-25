import React from 'react'
import {requestOrdersDelivery} from "../../redux/delivery-reducer";
import Delivery from "../../components/Delivery/Delivery";
import {connect} from "react-redux";

const fieldFilter = ['phone', 'total_price_start', 'total_price_end', 'payment_type', 'delivery_type', 'payment_status', 'status']

class DeliveryContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            filter: {},
            page: 1
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

    onChangePage = (page) => {
        this.state.page = page
        this.props.getOrders(this.state.filter, page)
    }

    changeFilter = () => {
        const fieldFilter = [
            'phone',
            'total_price_start',
            'total_price_end',
            'payment_type',
            'delivery_type',
            'payment_status',
            'status',
            //'time_delivery_start',
            //'time_delivery_end'
        ]

        fieldFilter.forEach(field => {
            if (document.getElementById(field).value) {
                this.state.filter[field] = document.getElementById(field).value
            } else if (!document.getElementById(field).value && this.state.filter[field]) {
                delete (this.state.filter[field])
            }
        })
        console.log(this.state.filter);
        this.state.page = 1
        this.props.getOrders(this.state.filter, this.state.page)
    }

    clearFilter = () => {
        fieldFilter.forEach(field => document.getElementById(field).value = '')
        this.state.filter = {}
        this.state.page = 1
        this.props.getOrders({}, 1)
    }

    render() {
        return <Delivery orders={this.props.orders}
                         detail={this.detail}
                         changeFilter={this.changeFilter}
                         clearFilter={this.clearFilter}
                         totalCount={this.props.totalCount}
                         page={this.state.page}
                         onChangePage={this.onChangePage} />
    }
}

let mapStateToProps = (state) => {
    return {
        orders: state.deliveryPage.orders,
        totalCount: state.deliveryPage.totalCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getOrders: (filter, page) => {
            dispatch(requestOrdersDelivery(filter, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryContainer);