import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../../common/FormsControls'
import Button from 'react-bootstrap/Button'

const UserEditForm = ({ handleSubmit, profile, cancel }) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Редактирование пользователя: {profile.email}
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
                                {createField('Имя', 'forename', [], Input)}
                            </div>

                            <div>
                                {createField('E-mail', 'email', [], Input)}
                            </div>

                            <div>
                                {createField('Телефон', 'phone', [], Input)}
                            </div>

                            <div>
                                {createField('Бонусы', 'bonusPoints', [], Input, 'number')}
                            </div>
                            <Button variant='primary' type='submit'>Сохранить</Button>
                            <Button variant='secondary' type='button' onClick={cancel}>Отменить</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const UserEditReduxForm = reduxForm({ form: 'edit-user', enableReinitialize: true })(UserEditForm)

export default UserEditReduxForm
