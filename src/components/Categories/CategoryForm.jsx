import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'
import validate from './Validate'

const CategoryForm = ({ category, handleSubmit, goBack }) => (
    <div className='page'>
        <div className='page-header'>
            <div
                className='page-header-title'>{category ? `Редактирование категории ${category.title}` : 'Создание новой категории'}</div>
        </div>
        <form className='page-container' onSubmit={handleSubmit}>
            <Field name='title' component='input' className='filter-main-input -name form-control'
                   placeholder='Название категории'/>
            <Field name='titleEn' component='input' className='filter-main-input -name form-control'
                   placeholder='Ссылка для адресной строки'/>
            <div>
                <label htmlFor="isDeliveryCategory">Доставка</label>
                <Field name='isDelivery'
                       id='is_delivery_category'
                       component='input'
                       type='checkbox'
                       className='filter-main-input -name form-control'/>
            </div>
            <div>
                <Button variant='outline-secondary' onClick={goBack}>Отмена</Button>
                <Button variant='primary'
                        type='submit'>{category ? 'Сохранить изменения' : 'Добавить категорию'}</Button>
            </div>
        </form>
    </div>
)

let reduxCategoryForm = reduxForm({ form: 'category-form', validate, enableReinitialize: true })(CategoryForm)

export default reduxCategoryForm
