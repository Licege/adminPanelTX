import React from 'react'
import CardVacancy from '../common/element/CardVacancy'

const Vacancies = ( props ) => {
    return (
        <div>
            <div className='page-header -action'>
                <div className='page-header-title'>
                    Вакансии
                </div>
                <div className='page-header-action'>
                    <button className='btn btn-primary' onClick={props.createVacancy}>Добавить вакансию</button>
                </div>
            </div>
            <div className='page-container'>
                <div className='card-body vacancies'>
                    {props.vacancies.map(( vacancy, key ) => (
                        <CardVacancy card={vacancy} key={key} change={props.changeVacancy}
                                     remove={props.removeVacancy}/>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Vacancies
