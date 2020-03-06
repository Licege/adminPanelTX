import React from "react";


const User = ({user, goEditMode, cancel}) => {
    return (
        user && <div>
                <div className='page-header'>
                    <div className='page-header-title'>
                        Редактирование профиля: {user.email}
                    </div>
                </div>
                <div className='page-container'>
                    <div className='card'>
                        <div className='card-body'>
                            <div>Фамилия: {user.surname}</div>
                            <div>Имя: {user.name}</div>
                            <div>E-mail: {user.email}</div>
                            <div>Телефон: {user.phone}</div>
                            <div>Бонусы: {user.bonus_points}</div>
                            <button onClick={goEditMode}>Изменить</button>
                            <button onClick={cancel}>Назад</button>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default User;