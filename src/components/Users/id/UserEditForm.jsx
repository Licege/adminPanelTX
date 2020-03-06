import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls";

const UserEditForm = ({handleSubmit, profile, cancel}) => {
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
                                {createField("ID", "id", [], Input)}
                            </div>
                            <div>
                                {createField("Фамилия", "surname", [], Input)}
                            </div>

                            <div>
                                {createField("Имя", "name", [], Input)}
                            </div>

                            <div>
                                {createField("E-mail", "email", [], Input)}
                            </div>

                            <div>
                                {createField("Телефон", "phone", [], Input)}
                            </div>

                            <div>
                                {createField("Бонус", "bonus_points", [], Input, 'number')}
                            </div>
                            <button type='submit'>Сохранить</button>
                            <button type='button' onClick={cancel}>Отменить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
};

const UserEditReduxForm = reduxForm({form: 'edit-user'})(UserEditForm);

export default UserEditReduxForm;