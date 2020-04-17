import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Button} from "react-bootstrap";

const SettingsForm = ( {handleSubmit, cancel} ) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='is_delivery'>Доставка</label>
                        <Field name='is_delivery' component='input' type='checkbox' />
                    </div>
                    <div>
                        <Field name='city' component='input' type='text' placeholder='Город' className='form-control filter-main-input -name' />
                    </div>
                    <div>
                        <label>Стоимость доставки</label>
                        <Field name='price_for_delivery' component='input' type='text' placeholder='Стоимость доставки' className='form-control filter-main-input -name' />
                    </div>
                    <div>
                        <label>Бесплатно с</label>
                        <Field name='free_delivery' component='input' type='text' placeholder='Бесплатно с' className='form-control filter-main-input -name' />
                    </div>
                    <Button type='submit' variant='primary'>Сохранить</Button>
                    <Button type='button' variant='secondary' onClick={cancel}>Отменить</Button>
                </form>
            </div>
        </div>
    )
};

const SettingsReduxForm = reduxForm({form: 'settings-delivery', enableReinitialize: true})(SettingsForm);
export default SettingsReduxForm;