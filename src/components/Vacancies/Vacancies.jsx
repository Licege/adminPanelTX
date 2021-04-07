import React from 'react'
import CardVacancy from '../common/element/CardVacancy'
import {PageHeader} from '../../styledComponents/components'

const Vacancies = (props) => {
  return (
    <div>
      <PageHeader title='Вакансии'>
        <button className="btn btn-primary" onClick={props.createVacancy}>Добавить вакансию</button>
      </PageHeader>
      <div className="page-container">
        <div className="card-body vacancies">
          {props.vacancies.map((vacancy, key) => (
            <CardVacancy card={vacancy}
                         key={key}
                         change={props.changeVacancy}
                         remove={props.removeVacancy}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vacancies
