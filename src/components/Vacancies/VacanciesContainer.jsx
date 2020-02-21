import React from 'react';
import {connect} from "react-redux";
import {createNewVacancy, requestVacancies} from "../../redux/vacancies-reducer";
import Vacancies from "./Vacancies";

class VacanciesContainer extends React.Component {
    componentDidMount() {
        this.props.getVacancies()
    }

    render() {
        return <>
            {this.props.isFetching ? 'Показать прелоадер' : null}
            <Vacancies vacancies={this.props.vacancies} createVacancy={this.props.createVacancy} />
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
        createVacancy: createNewVacancy
    })(VacanciesContainer)