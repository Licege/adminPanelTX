import React from 'react'
import { Form } from 'react-final-form'
import { Button } from 'react-bootstrap'
import ImageInput from '../../common/imageInput'
import { SCInputField } from '../styledComponents'
import {PageHeader} from '../../../styledComponents/components'


const RenderForm = ({ handleSubmit, submitting, pristine, vacancy, uploadFile, cancel }) => (
  <form onSubmit={handleSubmit}>
    <SCInputField name='title' placeholder='Название' />
    <SCInputField name='requirements' placeholder='Требования' />
    <SCInputField name='description' placeholder='Описание' />
    <SCInputField name='salary_from' placeholder='Зп от' parse={value => Number(value)} />
    <SCInputField name='salary_to' placeholder='Зп до' parse={value => Number(value)} />
    <div>
      <ImageInput value={vacancy ? vacancy.imageSrc : ''} onChange={uploadFile} allowClear={true} />
    </div>
    <Button variant="primary" type="submit" disabled={submitting || pristine}>Сохранить</Button>
    <Button variant="secondary" type="button" disabled={submitting} onClick={cancel}>Отменить</Button>
  </form>
)

const Vacancy = ({ onSubmit, ...props }) => {
  const { vacancy } = props
  const title = vacancy && vacancy.title ? `Редактирование вакансии: ${vacancy.title}` : 'Создание вакансии'

  return (
    <div>
      <PageHeader title={title} />
      <div className="page-container">
        <div className="card">
          <div className="card-body">
            <Form onSubmit={onSubmit}
                  render={({ ...formProps }) => <RenderForm {...formProps} {...props} />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vacancy
