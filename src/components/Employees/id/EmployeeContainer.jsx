import React from 'react';
import {requestCurrentEmployee} from "../../../redux/employees-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";

class EmployeeContainer extends React.Component{
    refreshEmployee() {
        let id = this.props.match.params.id;
        this.props.getEmployeeById(id)
    }

    componentDidMount() {
        this.refreshEmployee();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id ) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile employee={this.props.currentEmployee}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentEmployee: state.employeesPage.currentEmployee
    }
};

let WithUrlDataUserContainer = withRouter(EmployeeContainer);

export default connect(mapStateToProps, {getEmployeeById: requestCurrentEmployee})(WithUrlDataUserContainer)