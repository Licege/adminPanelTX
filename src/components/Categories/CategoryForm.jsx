import React from 'react'
import { Form } from 'react-final-form'
import { Button } from 'react-bootstrap'
import { SCInputField } from './styledComponents'
import validate from './Validate'

const RenderForm = ({ handleSubmit, pristine, submitting, category, goBack }) => (
  <form onSubmit={handleSubmit}>
    <SCInputField name="title" placeholder="Название категории" />
    <SCInputField name="titleEn" placeholder="Ссылка для адресной строки" />
    <div>
      <label htmlFor="isDeliveryCategory">Доставка</label>
      <SCInputField name="isDelivery"
                     id="is_delivery_category"
                     type="checkbox"
      />
    </div>
    <div>
      <Button variant="outline-secondary" onClick={goBack}>Отмена</Button>
      <Button variant="primary"
              type="submit"
              disabled={pristine || submitting}
      >{category ? 'Сохранить изменения' : 'Добавить категорию'}</Button>
    </div>
  </form>
)

const CategoryForm = ({ onSubmit, ...props }) => (
  <div className="page">
    <div className="page-header">
      <div
        className="page-header-title"
      >{props.category ? `Редактирование категории ${props.category.title}` : 'Создание новой категории'}</div>
    </div>
    <Form onSubmit={onSubmit} validate={validate} render={({ ...formProps }) => <RenderForm {...formProps} {...props} />} />
  </div>
)

export default CategoryForm
