import React from 'react';
import {createField, Input} from "../../common/FormsControls";
import {Field, reduxForm} from "redux-form";

const CreateProfile = ({postNewEmployee}) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Добавление нового сотрудника
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={postNewEmployee}>
                            <div>
                                {createField("Фамилия", "surname", [], Input)}
                            </div>

                            <div>
                                {createField("Имя", "name", [], Input)}
                            </div>

                            {/*
                            <div>
                                <label>Должность</label>
                                <div>
                                    <Field name="profession" component="select" >
                                        <option></option>
                                        <option value="0">Уборщик</option>
                                        <option value="1">Официант</option>
                                        <option value="2">Бармен</option>
                                        <option value="3">Повар</option>
                                        <option value="4">Охранник</option>
                                        <option value="5">Менеджер</option>
                                    </Field>
                                </div>
                            </div>
                            */}

                            <div>
                                {createField("Телефон", "phone", [], Input)}
                            </div>

                            <div>
                                {createField("Адрес", "address", [], Input)}
                            </div>

                            <button type='submit'>Сохранить</button>
                            <button type='button'>Отменить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const EmployeeEditReduxForm = reduxForm({form: 'create-employee'})(CreateProfile);
export default EmployeeEditReduxForm;