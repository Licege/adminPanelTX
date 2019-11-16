import React from "react";
import User from "./User";
import {requestCurrentUser} from "../../../redux/users-reducer";
import {connect} from "react-redux";


class UserContainer extends React.Component{
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getUserById(id);
    }

    render() {
        return (
            <>
             <User user={this.props.currentUser}/>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentUser: state.usersPage.currentUser,
    }
}

export default connect(mapStateToProps, {getUserById: requestCurrentUser})(UserContainer)

