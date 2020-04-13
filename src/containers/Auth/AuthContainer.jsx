import React from 'react'
import Auth from "../../components/Auth/Auth";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class AuthContainer extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
            window.location.reload()
        }
    }

    postData = async (data) => {
        this.props.login(data)
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