import React from "react";
import CardVacancy from '../common/element/CardVacancy';

const Vacancies = (props) => {
    let testMas = [
        {
            id: 1,
            title: 'Тест',
            requirements: 'Требования',
            description: 'Описание вакансии',
            salary_from: 27000,
            salary_to: 29000
        },
        {
            id: 2,
            title: 'Тест',
            requirements: 'Требования',
            description: 'Описание вакансии',
            salary_from: 27000,
            salary_to: 29000
        },
        {
            id: 3,
            title: 'Тест',
            requirements: 'Требования',
            description: 'Описание вакансии',
            salary_from: 27000,
            salary_to: 29000
        }
    ];
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
                        {testMas.map((test) => (
                            <CardVacancy card={test} key={test.id}/>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Vacancies;