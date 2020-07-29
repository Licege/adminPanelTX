import React from 'react'
import { createField, Input } from '../../common/FormsControls'
import { Field, reduxForm } from 'redux-form'


const EditEmployee = ( { employee, handleSubmit, professions, cancel } ) => {
    console.log(handleSubmit)
    return (
        employee && <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Редактирование профиля: {employee.surname + ' ' + employee.name}
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                {createField('Фамилия', 'surname', [], Input)}
                            </div>

                            <div>
                                {createField('Имя', 'name', [], Input)}
                            </div>

                            <div>
                                <label>Должность</label>
                                <div>
                                    <Field name="profession" component="select">
                                        {professions.map(p => {
                                            return <option value={p.id} key={p.id}>{p.profession}</option>
                                        })}
                                    </Field>
                                </div>
                            </div>

                            <div>
                                {createField('Телефон', 'phone', [], Input)}
                            </div>

                            <div>
                                {createField('Адрес', 'address', [], Input)}
                            </div>

                            <div>
                                {createField('file_id', 'file_id', [], Input)}
                            </div>

                            <button type='submit'>Сохранить</button>
                            <button type='button' onClick={( e ) => cancel()}>Отменить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const EmployeeEditReduxForm = reduxForm({ form: 'edit-employee', enableReinitialize: true })(EditEmployee)
export default EmployeeEditReduxForm
