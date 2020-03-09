import React from 'react';
import {connect} from "react-redux";
import {createNewVacancy, deleteVacancy, requestVacancies} from "../../redux/vacancies-reducer";
import Vacancies from "./Vacancies";

class VacanciesContainer extends React.Component {
    componentDidMount() {
        if (!this.props.vacancies.length) this.props.getVacancies()
    };

    createNewVacancy = () => {
        this.props.history.push(`vacancies/new`)
    };

    removeVacancy = (id) => {
        this.props.deleteVacancy(id);
        console.log(id)
    };

    changeVacancy = (id) => {
        console.log(id)
    };

    render() {
        return <>
            {this.props.isFetching ? 'Показать прелоадер' : null}
            <Vacancies vacancies={this.props.vacancies}
                       createVacancy={this.createNewVacancy}
                       changeVacancy={this.changeVacancy}
                       removeVacancy={this.removeVacancy} />
            </>
    }

}

let mapStateToProps = (state) => {
    return {
        vacancies: state.vacanciesPage.vacancies,
        currentVacancy: state.vacanciesPage.currentVacancy,
        isFetching: state.vacanciesPage.isFetching
    }
};

export default connect (mapStateToProps,
    {
        getVacancies: requestVacancies,
        createVacancy: createNewVacancy,
        deleteVacancy: deleteVacancy
    })(VacanciesContainer)