import React from 'react'
import {usersAPI} from "../../api/api";
import Users from './Users';
import {connect} from "react-redux";
import {getUsers, setCurrentPage, setTotalUsersCount} from "../../redux/users-reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        usersAPI.getUsers().then(data =>{
            this.props.getUsers(data.users);
            this.props.setTotalUsersCount(data.total_count);
        });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        usersAPI.getUsers(page).then(data =>{
            this.props.getUsers(data.users);
        });
    };

    detail = (id) => {
        this.props.history.push(`user/${id}`)
    };

    render() {
        return <Users users={this.props.users}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      onPageChanged={this.onPageChanged}
                      detail={this.detail}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

export default connect(mapStateToProps, {
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
}) (UsersContainer);