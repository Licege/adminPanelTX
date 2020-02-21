import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls";

const UserEditForm = ({handleSubmit, profile}) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Редактирование пользователя: {profile.email}
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <button>Сохранить</button>
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
            </form>
        </div>
        )
};

const UserEditReduxForm = reduxForm({form: 'edit-user'})(UserEditForm);

export default UserEditReduxForm;