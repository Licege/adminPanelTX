import React from 'react'
import {connect} from "react-redux";
import {postAdmin, requestAdmins} from "../../redux/admin-reducer";
import Admin from "../../components/Admin/Admin";
import {requestUsers} from "../../redux/users-reducer";

class AdminContainer extends React.Component {
    componentDidMount() {
        if (!this.props.admins.length) this.props.getAdmins()
        if (!this.props.users.length) this.props.getUsers()
    }

    newAdmin = (profile) => {

    }

    render() {
        return <Admin admins={this.props.admins} users={this.props.users} newAdmin={this.newAdmin} />
    }
}

let mapStateToProps = (state) => {
    return {
        admins: state.adminPage.admins,
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getAdmins: () => {
            dispatch(requestAdmins())
        },
        postAdmin: (profile) => {
            dispatch(postAdmin(profile))
        },
        getUsers: () => {
            dispatch(requestUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)