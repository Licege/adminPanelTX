import React from 'react'
import {connect} from "react-redux";
import {createNewVacancy} from "../../../redux/vacancies-reducer";
import Vacancy from "./Vacancy";

class CreateVacancy extends React.Component {
    componentDidMount() {
    }

    cancel = () => {
        this.props.history.goBack();
    };

    onSubmit = (vacancy) => {
        console.log(vacancy)
        this.props.history.goBack();
    };

    postVacancy = (vacancy) => {
        let data = { ...vacancy };
        data.salary_from = parseInt(data.salary_from, 10);
        data.salary_to = parseInt(data.salary_to, 10);
        data.file_id = parseInt(data.file_id, 10);
        this.props.createVacancy(data);
        this.props.history.goBack();
    };

    render() {
        return (
            <Vacancy onSubmit={this.postVacancy} cancel={this.cancel} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        createVacancy: (vacancy) => {
            dispatch(createNewVacancy(vacancy))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (CreateVacancy);