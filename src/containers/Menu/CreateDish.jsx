import React from 'react';
import {createDish, requestCategories} from "../../redux/menu-reducer";
import {connect} from "react-redux";
import CreateDish from "../../components/Menu/new/CreateDish";
import {deleteFIle, postFile} from "../../redux/file-reducer";

class CreateDishContainer extends React.Component {
    componentDidMount() {
        if (!this.props.categories.length) this.props.getCategories()
    }

    createDish = (dish) => {
        let data = {...dish};
        data.weight = parseInt(data.weight, 10);
        data.price = parseInt(data.price, 10);
        data.category_id = parseInt(data.category_id, 10);
        data.file = this.props.file
        this.props.createDish(data);
        this.props.history.goBack();
        console.log(data)
    };

    cancel = () => {
        this.props.history.goBack();
    };

    uploadFile = (event) => {
        let formDate = new FormData();
        formDate.append("file", event.target.files[0])
        this.props.postFile(formDate)
    }

    render() {
        return <CreateDish onSubmit={this.createDish}
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