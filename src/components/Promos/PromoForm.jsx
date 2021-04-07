import React from 'react'
import { Form } from 'react-final-form'
import { Button } from 'react-bootstrap'
//import EditorFieldComponent from "../common/element/editor/EditorFieldComponent";
import ImageInput from '../common/imageInput'
import ControlledEditor from '../common/element/editor/ControlledEditor'
import { SCInputField, SCTextareaField } from './styledComponents'
import { CheckboxWithLabel } from '../../styledComponents/atoms'
import {PageHeader} from '../../styledComponents/components'


const RenderForm = ({ handleSubmit, submitting, pristine, promo, changeDescription, uploadFile, goBack }) => (
  <form onSubmit={handleSubmit}>
    <SCInputField name='title' placeholder='Название' />
    <SCTextareaField name='shortDescription' placeholder='Краткое описание (необязательно)' />
    <div className="promos-form-wysivyg">
      <ControlledEditor value={promo ? promo.description : ''} onChange={changeDescription} />
    </div>
    <CheckboxWithLabel>
        <label>
            Показывать акцию&nbsp;&nbsp;<SCInputField type='checkbox' name='show' />
        </label>
    </CheckboxWithLabel>
    <div>
      <ImageInput value={promo ? promo.imageSrc : ''} onChange={uploadFile} allowClear={true} />
    </div>
    <div>
      <Button variant="secondary" type="button" onClick={goBack} disabled={submitting}>Отменить</Button>
      <Button variant="primary" type="submit" disabled={submitting || pristine}>Сохранить</Button>
    </div>
  </form>
)

const PromoForm = ({ onSubmit, ...props }) => {
  const { promo } = props
  return (
    <div>
      <PageHeader title={`promo ? Редактирование акции ${promo.title} : Создание акции`} />
      <div className="page-header">
        <div className="page-header-title">
          {promo ? `Редактирование акции ${promo.title}` : 'Создание акции'}
        </div>
      </div>
      <div className="page-container">
        <Form onSubmit={onSubmit} render={({ ...formProps }) => <RenderForm {...formProps} {...props} />} />
      </div>
    </div>

  )
}

export default PromoForm
