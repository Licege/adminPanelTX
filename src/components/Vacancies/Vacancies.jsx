import React from "react";
import CardVacancy from '../common/element/CardVacancy';

const Vacancies = (props) => {
    return (
        <div>
            <div className='page-header -action'>
                <div className='page-header-title'>
                    Вакансии
                </div>
                <div className='page-header-action'>
                    <button className='btn btn-primary'>Добавить вакансию</button>
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body vacancies'>
                        {props.vacancies.map((vacancy, key) => (
                            <CardVacancy card={vacancy} key={key}/>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Vacancies;