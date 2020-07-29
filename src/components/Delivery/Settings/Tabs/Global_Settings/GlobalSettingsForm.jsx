import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createField, Input } from '../../../../common/FormsControls'
import { Button } from 'react-bootstrap'


const GlobalSettingsForm = ( { handleSubmit } ) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div className='d_settings-block'>
                        <div className='d_settings-block-item'>
                            <div className='d_settings-block-item-label'>Доставка</div>
                            <Field name='is_delivery_working' component='input' type='checkbox'/>
                        </div>
                    </div>
                    <div>
                        <label>Телефон для SMS-уведомлений (В разработке)</label>
                        <div>
                            {createField('+79999999999', 'phone_for_sms', [], Input, 'text')}
                        </div>
                    </div>
                    <div className='d_settings-block'>
                        <div>Доступные варианты оплаты</div>
                        <div className='d_settings-block-item'>
                            <div className='d_settings-block-item-label'>Наличными курьеру</div>
                            <Field name='payment_type_cash' component='input' type='checkbox'/>
                        </div>
                        <div className='d_settings-block-item'>
                            <div className='d_settings-block-item-label'>Безналичный расчет курьеру</div>
                            <Field name='payment_type_cashless' component='input' type='checkbox'/>
                        </div>
                        <div className='d_settings-block-item'>
                            <div className='d_settings-block-item-label'>Безналичный расчет online</div>
                            <Field name='payment_type_online' component='input' type='checkbox'/>
                        </div>
                    </div>
                    <div className="d_settings-block">
                        <div className='d_settings-block-item'>Скида за самовывоз (в % от заказа)</div>
                        <Field name='sale_for_pickup' component='input'
                               className="filter-main-input -name form-control"/>
                    </div>
                    <Button type='submit' variant='primary'>Сохранить</Button>
                    <Button type='button' variant='secondary'>Отменить</Button>
                </form>
            </div>
        </div>
    )
}

const GlobalSettingsReduxForm = reduxForm({
    form: 'global-delivery-settings',
    enableReinitialize: true,
})(GlobalSettingsForm)
export default GlobalSettingsReduxForm
