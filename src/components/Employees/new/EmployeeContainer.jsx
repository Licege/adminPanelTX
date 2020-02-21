import React from 'react';
import CreateProfile from "./Employee";
import {createEmployee} from "../../../redux/employees-reducer";
import {connect} from "react-redux";
import {employeesAPI} from "../../../api/api";

class CreateEmployee extends React.Component {
    postNewEmployee = (profile) => {
        console.log("1");
        console.log(profile);
        employeesAPI.createEmployee(profile).then(data => {
            this.props.createEmployee(data)
        })
    };

    render() {
        return (
            <CreateProfile postNewEmployee={this.props.postNewEmployee}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newEmployee: state.employeesPage.newEmployee
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        createEmployee: (profile) => {
            dispatch(createEmployee(profile))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (CreateEmployee);