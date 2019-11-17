import React from "react";
import User from "./User";
import {requestCurrentUser} from "../../../redux/users-reducer";
import {connect} from "react-redux";
import UserEditForm from "./UserEditForm";


class UserContainer extends React.Component{
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
    };

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getUserById(id);
        console.log('Сначалао гет юзер')
    }


    render() {

        const onSubmit = (formData) => {
            console.log(formData);
            this.deactivateEditMode()
        };

        return (
            <>
                {!this.state.editMode
                ? <UserEditForm initialValues={this.props.currentUser} profile={this.props.currentUser} onSubmit={onSubmit} />
                : <User user={this.props.currentUser} />
                }
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentUser: state.usersPage.currentUser,
    }
};

export default connect(mapStateToProps, {getUserById: requestCurrentUser})(UserContainer)

