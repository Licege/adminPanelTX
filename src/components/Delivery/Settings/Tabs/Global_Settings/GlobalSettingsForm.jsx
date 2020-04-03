import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../../../common/FormsControls";
import {Button} from "react-bootstrap";


const GlobalSettingsForm = ( {handleSubmit} ) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='is_delivery_working'>Доставка</label>
                        <div>
                            <Field name='is_delivery_working' component='input' type='checkbox'/>
                        </div>
                    </div>
                    <div>
                        <label>Телефон для SMS-уведомлений</label>
                        <div>
                            {createField('+79999999999', 'phone_for_sms', [], Input, 'text')}
                        </div>
                    </div>
                    <Button type='submit' variant='primary'>Сохранить</Button>
                    <Button type='button' variant='secondary'>Отменить</Button>
                </form>
            </div>
        </div>
    )
};

const GlobalSettingsReduxForm = reduxForm({form: 'global-delivery-settings', enableReinitialize: true}) (GlobalSettingsForm);
export default GlobalSettingsReduxForm;