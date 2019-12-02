import React from "react";
import CardVacancy from '../common/element/CardVacancy';

const Vacancies = ({vacancies}) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Вакансии
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body vacancies'>
                        {vacancies.map((vacancy) => (
                            <CardVacancy card={vacancy} key={vacancy.id}/>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Vacancies;