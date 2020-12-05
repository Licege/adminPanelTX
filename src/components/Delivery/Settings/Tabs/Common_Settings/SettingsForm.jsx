import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'

const SettingsForm = ({ handleSubmit, currentSettings, cancel }) => {
    return (
        <div className='page form_delivery'>
            <div className='page-header'>
                <div className='page-header-title'>{currentSettings
                    ? 'Редактирование доставки в ' + currentSettings.city
                    : 'Создание новой зоны доставки'}
                </div>
            </div>
            <form onSubmit={handleSubmit} className='page-container'>
                <div className='form_delivery__checkbox'>
                    <Field name='isDelivery'
                           id='is_delivery'
                           className='filter-main-checkbox form-control'
                           component='input'
                           type='checkbox'
                           chacked='isDelivery'
                    />
                    <label htmlFor='is_delivery'>Доставка</label>
                </div>
                <div>
                    <Field name='city' component='input' type='text' placeholder='Город'
                           className='form-control filter-main-input -name'/>
                </div>
                <div>
                    <label>Стоимость доставки</label>
                    <Field name='priceForDelivery' component='input' type='text' placeholder='Стоимость доставки'
                           className='form-control filter-main-input -name'/>
                </div>
                <div>
                    <label>Бесплатно с</label>
                    <Field name='freeDelivery' component='input' type='text' placeholder='Бесплатно с'
                           className='form-control filter-main-input -name'/>
                </div>
                <Button type='button' variant='secondary' onClick={cancel}>Отменить</Button>
                <Button type='submit' variant='primary'>Сохранить</Button>
            </form>
        </div>
    )
}

const SettingsReduxForm = reduxForm({ form: 'settings-delivery', enableReinitialize: true })(SettingsForm)
export default SettingsReduxForm
