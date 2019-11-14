import React from 'react'
import {usersAPI} from "../../api/api";
import Users from './Users';
import {connect} from "react-redux";
import {getUsersAC} from "../../redux/users-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        usersAPI.getUsers().then(data =>{
            this.props.getUsers(data);
            console.log(data)
        })
    }

    render() {
        return <Users users={this.props.users}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (users) => {
            dispatch(getUsersAC(users))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);