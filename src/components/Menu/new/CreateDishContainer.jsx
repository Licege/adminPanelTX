import React from 'react';
import {createDish, requestCategories} from "../../../redux/menu-reducer";
import {connect} from "react-redux";
import CreateDish from "./CreateDish";

class CreateDishContainer extends React.Component {
    componentDidMount() {
        this.props.getCategories()
    }

    createDish = (dish) => {
        let data = {...dish};
        data.weight = parseInt(data.weight, 10);
        data.price = parseInt(data.price, 10);
        data.category_id = parseInt(data.category_id, 10);
        this.props.createDish(data);
        this.props.history.goBack();
        console.log(dish)
    };

    cancel = () => {
        this.props.history.goBack();
    };

    render() {
        return <CreateDish onSubmit={this.createDish}
                           categories={this.props.categories}
                           cancel={this.cancel} />
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.menuPage.categories
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        createDish: (dish) => {
            dispatch(createDish(dish))
        },
        getCategories() {
            dispatch(requestCategories())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (CreateDishContainer);