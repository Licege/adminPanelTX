import React from 'react'
import Menu from "./Menu";
import {deleteDish, requestDishes} from "../../redux/menu-reducer";
import {connect} from "react-redux";

class MenuContainer extends React.Component {
    componentDidMount() {
        this.props.getDishes();
    }

    create = (dish) => {
        this.props.createDish(dish);
    };

    newDish = () => {
        this.props.history.push(`menu/new`)
    };

    detail = (id) => {
        this.props.history.push(`menu/edit/${id}`)
    };

    deleteDish = (id) => {
        this.props.deleteDish(id)
    };

    savePhoto = (file) => {
        console.log("Сделать санку", file)
    };

    onPhotoSelected = (e) => {
        if (e.target.files.length) this.savePhoto(e.target.files[0])
    };

    render() {
        return <Menu dishes={this.props.dishes}
                     newDish={this.newDish}
                     deleteDish={this.deleteDish}
                     onPhotoSelected={this.onPhotoSelected} />
    }
}

let mapStateToProps = (state) => {
    return {
        dishes: state.menuPage.dishes
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getDishes: () => {
            dispatch(requestDishes())
        },
        deleteDish: (id) => {
            dispatch(deleteDish(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (MenuContainer);