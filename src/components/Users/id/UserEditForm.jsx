import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls";

const UserEditForm = ({handleSubmit, profile}) => {
    console.log(profile)
    debugger;
    return (
        <>
            <div className='page-header'>
                <div className='page-header-title'>
                    Редактирование пользователя: {profile.email}
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <button>Сохранить</button>
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
                    {createField("Бонус", "bonus_points", [], Input)}
                </div>
            </form>
        </>
        )
};

const UserEditReduxForm = reduxForm({form: 'edit-user'})(UserEditForm);

export default UserEditReduxForm;