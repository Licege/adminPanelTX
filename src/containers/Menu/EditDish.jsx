import React from 'react'
import {connect} from "react-redux";
import {requestCategories, requestDish, updateDish} from "../../redux/menu-reducer";
import FormDish from "../../components/Menu/FormDish";
import {initializeFileAC, postFile} from "../../redux/file-reducer";

class EditDishContainer extends React.Component{
    componentDidMount() {
        let id = this.props.match.params.id
        if (!this.props.dish || this.props.dish.id !== id) {
            this.props.getDish(id)
        }
        if (!this.props.categories.length) this.props.getCategories()
        //this.props.initializeFile(this.props.dish.file)
    }

    onSubmit = (dish) => {
        dish.weight = parseInt(dish.weight, 10);
        dish.price = parseInt(dish.price, 10);
        dish.category_id = parseInt(dish.category_id, 10);
        dish.file = this.props.file
        console.log(dish)
        this.props.updateDish(dish)
        this.props.history.goBack();
    }

    cancel = () => {
        this.props.history.goBack();
    }

    uploadFile = (event) => {
        let formDate = new FormData();
        formDate.append("file", event.target.files[0])
        this.props.postFile(formDate)
    }

    render() {
        return <FormDish initialValues={this.props.dish}
                         onSubmit={this.onSubmit}
                         categories={this.props.categories}
                         cancel={this.cancel}
                         postFile={this.uploadFile} />
    }
}

let mapStateToProps = (state) => {
    return {
        dish: state.menuPage.dish,
        categories: state.menuPage.categories,
        file: state.fileLoad.file
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
        updateDish: (dish) => {
            dispatch(updateDish(dish))
        },
        initializeFile: (file) => {
            dispatch(initializeFileAC(file))
        },
        postFile: (file) => {
            dispatch(postFile(file))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDishContainer)