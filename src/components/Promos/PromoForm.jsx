import React from 'react'
import {Field, reduxForm} from "redux-form";
//import EditorFieldComponent from "../common/element/editor/EditorFieldComponent";
import Button from "react-bootstrap/Button";
import ImageInput from '../common/imageInput';
import ControlledEditor from '../common/element/editor/ControlledEditor';

const PromoForm = ({handleSubmit, promo, changeDescription, uploadFile, goBack}) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    {promo ? `Редактирование акции ${promo.title}` : 'Создание акции'}
                </div>
            </div>
            <form onSubmit={handleSubmit} className='page-container'>
                <div>
                    <Field name='title'
                           component='input'
                           type='text'
                           className='form-control filter-main-input -name'
                           placeholder='Название' />
                </div>
                <div>
                    <Field name='short_description'
                           component='textarea'
                           className='form-control filter-main-input -name'
                           placeholder='Краткое описание (необязательно)' />
                </div>
                <div className='promos-form-wysivyg'>
                    <ControlledEditor value={promo ? promo.description : ''} onChange={changeDescription} />
                </div>
                <div>
                    <label htmlFor='isShow'>Показывать акцию</label>
                    <Field name='show'
                           id='show'
                           component='input'
                           type='checkbox'
                           className="filter-main-input -name form-control" />
                </div>
                <div>
                    <ImageInput value={promo ? promo.imageSrc : ''} onChange={uploadFile} allowClear={true} />
                </div>
                <div>
                    <Button variant='primary' type='submit'>Сохранить</Button>
                    <Button variant='secondary' type='button' onClick={goBack}>Отменить</Button>
                </div>
            </form>
        </div>

    )
}

let reduxPromoForm = reduxForm({form: 'promo-form', enableReinitialize: true})(PromoForm)

export default reduxPromoForm;
