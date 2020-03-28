import React from 'react';
import {getProfessionsAC, requestCurrentEmployee, updateCurrentEmployee} from "../../redux/employees-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {employeesAPI} from "../../api/api";
import ProfileEmployee from "../../components/Employees/id/ProfileEmployee";

class EmployeeContainer extends React.Component{
    refreshEmployee() {
        let id = this.props.match.params.id;
        this.props.getEmployeeById(id);
    }

    onSubmit = (profile) => {
        let data = {...profile};
        data.profession = parseInt(data.profession, 10);
        data.file_id = parseInt(data.file_id, 10);
        this.props.updateEmployee(data);
        this.props.history.goBack();
    };

    cancel = () => {
        this.props.history.goBack();
    };

    componentDidMount() {
        if (this.props.professions.length === 0) {
            employeesAPI.getProfessions().then(data => {
                this.props.getProfessions(data);
            })
        }
        this.refreshEmployee();
    }
/*
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id ) {
            this.refreshEmployee();
        }
    }
*/
    render() {
        return (
            <ProfileEmployee
                          employee={this.props.currentEmployee}
                          professions={this.props.professions}
                          onSubmit={this.onSubmit}
                          cancel={this.cancel} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentEmployee: state.employeesPage.currentEmployee,
        professions: state.employeesPage.professions,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeById: (id) => {
            dispatch(requestCurrentEmployee(id))
        },
        getProfessions: (professions) => {
            dispatch(getProfessionsAC(professions))
        },
        updateEmployee: (profile) => {
            dispatch(updateCurrentEmployee(profile))
        }
    }
};

let WithUrlDataUserContainer = withRouter(EmployeeContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataUserContainer)