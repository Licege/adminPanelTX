import React from 'react'
import { connect } from "react-redux";
import { deleteCategory, requestCategories } from "../../redux/menu-reducer";
import Categories from "../../components/Categories/Categories";

class CategoriesContainer extends React.PureComponent {
    componentDidMount() {
        if (!this.props.categories.length) this.props.getCategories()
    }

    create = () => this.props.history.push(`categories/new`)

    detail = (id) => () => this.props.history.push(`categories/edit/${id}`)

    remove = (id) => (e) => {
        e.stopPropagation()
        this.props.deleteCategory(id)
    }


    render() {
        return <Categories categories={this.props.categories}
                           createCategory={this.create}
                           updateCategory={this.detail}
                           deleteCategory={this.remove} />
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.menuPage.categories
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => {
            dispatch(requestCategories())
        },
        deleteCategory(id) {
            dispatch(deleteCategory(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoriesContainer)