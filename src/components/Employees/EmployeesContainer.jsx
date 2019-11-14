import React from 'react'
import {employeesAPI} from "../../api/api";
import Employees from './Employees';
import {connect} from "react-redux";
import {getEmployeesAC} from "../../redux/employees-reducer";

class EmployeesContainer extends React.Component {
    componentDidMount() {
        employeesAPI.getEmployees().then(data =>{
            this.props.getEmployees(data);
            console.log(data)
        })
    }

    render() {
        return <Employees employees={this.props.employees}/>
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