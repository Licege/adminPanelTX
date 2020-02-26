import React from 'react';
import CreateProfile from "./Employee";
import {createNewEmployee} from "../../../redux/employees-reducer";
import {connect} from "react-redux";

class CreateEmployee extends React.Component {
    postEmployee = (profile) => {
        console.log(profile)
        let data = {...profile};
        data.profession = parseInt(data.profession, 10);
        data.fileId = parseInt(data.fileId, 10);
        console.log(data)
        /*
        employeesAPI.createNewEmployee(data).then(data => {
            this.props.createEmployee(data)
        });
         */
        this.props.createNewEmployee(data);
    };

    render() {
        return (
            <CreateProfile initialValues={this.props.employee}
                           employee={this.props.employee}
                           onSubmit={this.postEmployee} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        employee: state.employeesPage.currentEmployee
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        createEmployee: (profile) => {
            dispatch(createNewEmployee(profile))
        }
    }
};

export default connect(mapStateToProps, {createNewEmployee}) (CreateEmployee);