import React from 'react';
import {createDish, requestCategories} from "../../redux/menu-reducer";
import {connect} from "react-redux";
import FormDish from "../../components/Menu/FormDish";
import {deleteFIle, postFile} from "../../redux/file-reducer";

class CreateDishContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: ''
        }
    }

    componentDidMount() {
        if (!this.props.categories.length) this.props.getCategories()
    }

    createDish = (dish) => {
        let formData = new FormData();
        for (let key in dish) {
            formData.append(key, dish[key])
        }
        formData.weight = parseInt(formData.weight, 10);
        formData.price = parseInt(formData.price, 10);
        formData.append('image', this.state.file)
        this.props.createDish(formData);
        this.props.history.goBack();
    };

    cancel = () => {
        this.props.history.goBack();
    };

    uploadFile = (event) => {
        this.state.file = event.target.files[0]
    }

    render() {
        return <FormDish onSubmit={this.createDish}
                         categories={this.props.categories}
                         cancel={this.cancel}
                         postFile={this.uploadFile}
                         deleteFile={this.props.deleteFile} />
    }
}

let mapStateToProps = (state) => {
    return {
        categories: state.menuPage.categories,
        file: state.fileLoad.file
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        createDish: (dish) => {
            dispatch(createDish(dish))
        },
        getCategories() {
            dispatch(requestCategories())
        },
        postFile(file) {
            dispatch(postFile(file))
        },
        deleteFile(id) {
            dispatch(deleteFIle(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (CreateDishContainer);