import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Button} from "react-bootstrap";

const SettingsForm = ( {cities, handleSubmit} ) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='is_delivery'>Доставка</label>
                        <Field name='is_delivery' component='input' type='checkbox' />
                    </div>
                    <div>
                        <Field name='city_id' component='select'>
                            <option>Выберите город</option>
                            {cities.map(city => (
                                <option value={city.id} key={city.id}>{city.title}</option>
                            ))}
                        </Field>
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
                    <Button type='button' variant='secondary'>Отменить</Button>
                </form>
            </div>
        </div>
    )
};

const SettingsReduxForm = reduxForm({form: 'settings-delivery'})(SettingsForm);
export default SettingsReduxForm;