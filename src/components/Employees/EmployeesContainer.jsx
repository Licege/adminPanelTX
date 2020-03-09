import React from 'react'
import {employeesAPI} from "../../api/api";
import Employees from './Employees';
import {connect} from "react-redux";
import {deleteEmployeeAC, requestEmployees, requestProfessins} from "../../redux/employees-reducer";

class EmployeesContainer extends React.Component {
    componentDidMount() {
        if (!this.props.employees.length) this.props.getEmployees();
        if (!this.props.professions.length) this.props.getProfessions();
    }

    detail = (id) => {
        this.props.history.push(`employees/edit/${id}`)
    };

    createNewEmployee = () => {
        this.props.history.push(`employees/new`)
    };

    delete = (id) => {
        employeesAPI.deleteEmployee(id);
        this.props.deleteEmployee(id);
    };

    render() {
        return <Employees
            employees={this.props.employees}
            professions={this.props.professions}
            detail={this.detail}
            createNewEmployee={this.createNewEmployee}
            delete={this.delete} />
    }
}

let mapStateToProps = (state) => {
    return {
        employees: state.employeesPage.employees,
        professions: state.employeesPage.professions
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        getEmployees: () => {
            dispatch(requestEmployees())
        },
        deleteEmployee: (id) => {
            dispatch(deleteEmployeeAC(id))
        },
        getProfessions: () => {
            dispatch(requestProfessins())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (EmployeesContainer);