import React from 'react'
import {connect} from "react-redux";
import {addDishIntoListAC, requestOrderDeliveryById, updateOrderDelivery} from "../../redux/delivery-reducer";
import DeliveryInfo from "../../components/Delivery/DeliveryInfo";
import {requestCategories, requestDishes, requestDishesByCategory} from "../../redux/menu-reducer";

class DeliveryInfoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: '',
            isOpen: false
        }
    }

    componentDidMount() {
        this.props.getOrder(this.props.match.params.id)
        this.props.getMenu()
        if (!this.props.categories.length) this.props.getCategories()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.filter !== this.state.filter) {
            if (this.state.filter === '') this.props.getMenu()
            else this.props.getMenuByCategory(this.state.filter)
        }
    }

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    applyFilterModal = () => {
        let category = document.getElementById('select-category-modal').value
        this.setState({filter: category})
    }

    addDish = (dish) => {
        return () => {
            console.log(dish);
            this.props.addDishIntoList(dish)
        }
    }

    update = (order) => {
        this.props.updateOrder(order)
        this.props.history.push('/delivery')
    }

    render() {
        return <DeliveryInfo order={this.props.order}
                             onSubmit={this.update}
                             menu={this.props.dishes}
                             categories={this.props.categories}
                             show={this.state.isOpen}
                             toggleModal={this.toggleModal}
                             applyFilterModal={this.applyFilterModal}
                             addDish={this.addDish}
                             currentCategory={this.state.filter}
                             initialValues={this.props.order} />
    }
}

let mapStateToProps = (state) => {
    return {
        order: state.deliveryPage.currentOrder,
        dishes: state.menuPage.dishes,
        categories: state.menuPage.categories
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (id) => {
            dispatch(requestOrderDeliveryById(id))
        },
        updateOrder: (order) => {
            dispatch(updateOrderDelivery(order))
        },
        getMenu: () => {
            dispatch(requestDishes())
        },
        getCategories: () => {
            dispatch(requestCategories())
        },
        getMenuByCategory: (category) => {
            dispatch(requestDishesByCategory(category))
        },
        addDishIntoList: (dish) => {
            dispatch(addDishIntoListAC(dish))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryInfoContainer)