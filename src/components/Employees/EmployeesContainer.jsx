import React from 'react'
import {employeesAPI} from "../../api/api";
import Employees from './Employees';
import {connect} from "react-redux";
import {getEmployeesAC} from "../../redux/employees-reducer";

class EmployeesContainer extends React.Component {
    componentDidMount() {
        employeesAPI.getEmployees().then(data =>{
            this.props.getEmployees(data);
        })
    }

    detail = (id) => {
        this.props.history.push(`employees/edit/${id}`)
    };

    createNewEmployee = () => {
        this.props.history.push(`employees/new`)
    };

    delete = (id) => {
        console.log(id)
    };

    render() {
        return <Employees
            employees={this.props.employees}
            detail={this.detail}
            createNewEmployee={this.createNewEmployee}
            delete={this.delete}/>
    }
}

let mapStateToProps = (state) => {
    return {
        employees: state.employeesPage.employees
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        getEmployees: (employees) => {
            dispatch(getEmployeesAC(employees))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (EmployeesContainer);