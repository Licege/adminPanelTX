import React from 'react'
import Auth from "../../components/Auth/Auth";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class AuthContainer extends React.Component {
    postData = (data) => {
        this.props.login(data)
        this.props.history.push('/')
    }

    render() {
        return (
            <Auth onSubmit={this.postData} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch(login(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AuthContainer);