import React from 'react'
import { Field } from 'react-final-form'
import { Button } from 'react-bootstrap'
import Form from '../../../../Form/form'
import { PageHeader } from '../../../../../styledComponents/components'

const SettingsForm = ({ onSubmit, currentSettings, cancel }) => {
    const title = currentSettings
      ? `Редактирование доставки в ${currentSettings.city}`
      : 'Создание новой зоны доставки'
    return (
        <div className='page form_delivery'>
            <PageHeader title={title} />
            <Form onSubmit={onSubmit}>
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
            </Form>
        </div>
    )
}

export default SettingsForm
