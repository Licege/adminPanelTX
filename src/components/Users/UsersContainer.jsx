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
        });
        //this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        let onPageChanged = (page) => {
            console.log(page)
            return this.currentPage === page
        };
        return <Users users={this.props.users}
                      onPageChanged={onPageChanged}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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