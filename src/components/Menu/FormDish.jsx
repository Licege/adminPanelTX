import React from 'react'
import { Form } from 'react-final-form'
import Button from 'react-bootstrap/Button'
import { CheckboxWithLabel } from '../../styledComponents/atoms'
import { SCInputField, SCSelectField } from './styledComponents'
import { prepareOptions } from '../Form'
import ImageInput from '../common/imageInput'
import {PageHeader} from '../../styledComponents/components'


const RenderForm = ({ handleSubmit, submitting, pristine, categories = [], dish, cancel, uploadFile }) => (
  <form onSubmit={handleSubmit}>
    <SCInputField name='title' placeholder='Название' />
    <SCInputField name='description' placeholder='Описание' />
    <div>
      <label>Категории</label>
      <SCSelectField name='categoryId'
                     options={prepareOptions(categories, { value: 'id', name: 'title' })}
                     withEmptyOption
                     emptyOptionTitle='Выберите категорию'
      />
    </div>
    <SCInputField name='weight' placeholder='Вес порции (г.)' />
    <SCInputField name='cost' placeholder='Цена' />
    <CheckboxWithLabel>
      <label>
        <SCInputField name="isDelivery" type="checkbox" />&nbsp;&nbsp;Доставка
      </label>
    </CheckboxWithLabel>
    <div>
        <ImageInput value={dish ? dish.imageSrc : ''} onChange={uploadFile} allowClear={true} />
    </div>
    <div className="form_dish__actions">
        <Button variant="secondary" type="button" onClick={cancel} disabled={submitting}>Отменить</Button>
        <Button variant="primary" type="submit" disabled={submitting || pristine}>Сохранить</Button>
    </div>
  </form>
)

const FormDish = ({ onSubmit, openDelModal, ...props }) => {
  const { dish } = props;
  return (
    <div className="form_dish">
      <PageHeader>
        {dish ? <Button variant="danger" onClick={openDelModal}>Удалить</Button> : null}
      </PageHeader>
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

export default FormDish
