import React from 'react'
import {connect} from "react-redux";
import {postAdmin, requestAdmins} from "../../redux/admin-reducer";
import Admin from "../../components/Admin/Admin";

class AdminContainer extends React.Component {
    componentDidMount() {
        if (!this.props.admins.length) this.props.getAdmins()
    }

    newAdmin = (profile) => {

    }

    render() {
        return <Admin admins={this.props.admins} newAdmin={this.newAdmin} />
    }
}

let mapStateToProps = (state) => {
    return {
        admins: state.adminPage.admins
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getAdmins: () => {
            dispatch(requestAdmins())
        },
        postAdmin: (profile) => {
            dispatch(postAdmin(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)