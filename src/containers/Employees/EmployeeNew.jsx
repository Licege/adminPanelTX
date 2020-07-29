import React from 'react'
import CreateProfile from '../../components/Employees/new/Employee'
import { createNewEmployee, getProfessionsAC } from '../../redux/employees-reducer'
import { connect } from 'react-redux'
import { employeesAPI } from '../../api/api'

class CreateEmployee extends React.Component {
    componentDidMount() {
        if (this.props.professions.length === 0) {
            employeesAPI.getProfessions().then(data => {
                this.props.getProfessions(data)
            })
        }
    }

    postEmployee = ( profile ) => {
        let data = { ...profile }
        data.profession = parseInt(data.profession, 10)
        data.file_id = parseInt(data.file_id, 10)
        this.props.createEmployee(data)
        this.props.history.goBack()
    }

    cancel = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <CreateProfile initialValues={this.props.employee}
                           employee={this.props.employee}
                           professions={this.props.professions}
                           cancel={this.cancel}
                           onSubmit={this.postEmployee}/>
        )
    }
}

let mapStateToProps = ( state ) => {
    return {
        employee: state.employeesPage.newEmployee,
        professions: state.employeesPage.professions,
    }
}
let mapDispatchToProps = ( dispatch ) => {
    return {
        createEmployee: ( profile ) => {
            dispatch(createNewEmployee(profile))
        },
        getProfessions: ( professions ) => {
            dispatch(getProfessionsAC(professions))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee)
