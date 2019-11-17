import React, {useState} from "react";


const User = (props) => {
    return (
            <div>
                <div className='page-header'>
                    <div className='page-header-title'>
                        Редактирование профиля: {props.user.name}
                    </div>
                </div>
                <div className='page-container'>
                    <div className='card'>
                        <div className='card-body'>
                                <div>Фамилия: <input value={props.user.surname} /></div>
                                <div>Имя: <input value={props.user.name} /></div>
                                <div>E-mail: <input value={props.user.email} /></div>
                                <div>Телефон: <input value={props.user.phone} /></div>
                                <div>Бонусы: <input value={props.user.bonus_points} /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default User;