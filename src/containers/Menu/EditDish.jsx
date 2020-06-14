import React from 'react'
import {connect} from "react-redux";
import {requestCategories, requestDish, updateDish} from "../../redux/menu-reducer";
import FormDish from "../../components/Menu/FormDish";

class EditDishContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            file: ''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        if (!this.props.dish || this.props.dish._id !== id) {
            this.props.getDish(id)
        }
        if (!this.props.categories.length) this.props.getCategories()
    }

    onSubmit = (dish) => {
        let formData = new FormData();
        for (let key in dish) {
            formData.append(key, dish[key])
        }
        this.state.file && formData.append('image', this.state.file)
        this.props.updateDish(formData, dish._id)
        this.props.history.goBack();
    }

    cancel = () => {
        this.props.history.goBack();
    }

    uploadFile = (event) => {
        this.setState({file: event.target.files[0]})
    }

    render() {
        return <FormDish initialValues={this.props.dish}
                         onSubmit={this.onSubmit}
                         dish={this.props.dish}
                         categories={this.props.categories}
                         cancel={this.cancel}
                         postFile={this.uploadFile} />
    }
}

let mapStateToProps = (state) => {
    return {
        dish: state.menuPage.dish,
        categories: state.menuPage.categories
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDish: (id) => {
            dispatch(requestDish(id))
        },
        getCategories: () => {
            dispatch(requestCategories())
        },
        updateDish: (dish, id) => {
            dispatch(updateDish(dish, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDishContainer)