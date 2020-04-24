import React from 'react';
import {createField, Input} from "../../common/FormsControls";
import {Field, reduxForm} from "redux-form";

const CreateProfile = ({handleSubmit, professions, cancel}) => {
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
                        <form onSubmit={handleSubmit}>
                            <div>
                                {createField("Фамилия", "surname",[], Input)}
                            </div>

                            <div>
                                {createField("Имя", "name", [], Input)}
                            </div>

                            <div>
                                <label>Должность</label>
                                <div>
                                    <Field name="profession" component="select" className="filter-main-input -name form-control" >
                                        <option></option>
                                        {professions.map(p => {
                                            return <option value={p.id} key={p.id}>{p.profession}</option>
                                        })}
                                    </Field>
                                </div>
                            </div>

                            <div>
                                {createField("Телефон", "phone", [], Input)}
                            </div>

                            <div>
                                {createField("Адрес", "address", [], Input)}
                            </div>

                            <div>
                                {createField("fileId", "file_id", [], Input)}
                            </div>

                            <button type='submit'>Сохранить</button>
                            <button type='button' onClick={(e) => cancel()}>Отменить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const EmployeeEditReduxForm = reduxForm({form: 'create-employee'})(CreateProfile);
export default EmployeeEditReduxForm;