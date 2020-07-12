import React from 'react'
import {connect} from "react-redux"
import Menu from "../../components/Menu/Menu"
import {deleteDish, requestCategories, requestDishes} from "../../redux/menu-reducer"

class MenuContainer extends React.Component {
    componentDidMount() {
        if (!this.props.dishes.length) this.props.getDishes();
        if (!this.props.categories.length) this.props.getCategories();
    }

    newDish = () => {
        this.props.history.push(`menu/new`)
    }

    detail = (id) => {
        return () => {
            this.props.history.push(`menu/edit/${id}`)
        }
    }

    deleteDish = (id) => {
        return () => {
            this.props.deleteDish(id)
        }
    }

    savePhoto = (file) => {
        console.log("Сделать санку для пдф", file)
    }

    onPhotoSelected = (e) => {
        if (e.target.files.length) this.savePhoto(e.target.files[0])
    }

    render() {
        return <Menu dishes={this.props.dishes}
                     categories={this.props.categories}
                     newDish={this.newDish}
                     deleteDish={this.deleteDish}
                     detail={this.detail}
                     onPhotoSelected={this.onPhotoSelected} />
    }
}

let mapStateToProps = (state) => {
    return {
        dishes: state.menuPage.dishes,
        categories: state.menuPage.categories
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getDishes: () => {
            dispatch(requestDishes())
        },
        getCategories: () => {
            dispatch(requestCategories())
        },
        deleteDish: (id) => {
            dispatch(deleteDish(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (MenuContainer);
