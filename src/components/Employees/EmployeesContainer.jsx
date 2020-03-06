import React from 'react'
import {employeesAPI} from "../../api/api";
import Employees from './Employees';
import {connect} from "react-redux";
import {deleteEmployeeAC, getEmployeesAC, getProfessionsAC} from "../../redux/employees-reducer";

class EmployeesContainer extends React.Component {
    componentDidMount() {
        employeesAPI.getEmployees().then(data =>{
            this.props.getEmployees(data);
        });
        employeesAPI.getProfessions().then(data => {
            this.props.getProfessions(data);
        })
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
        getEmployees: (employees) => {
            dispatch(getEmployeesAC(employees))
        },
        deleteEmployee: (id) => {
            dispatch(deleteEmployeeAC(id))
        },
        getProfessions: (professions) => {
            dispatch(getProfessionsAC(professions))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (EmployeesContainer);