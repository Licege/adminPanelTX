import React from "react";
import Button from "react-bootstrap/Button";


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
                            <Button variant='primary' onClick={goEditMode}>Изменить</Button>
                            <Button variant='outline-secondary' onClick={cancel}>Назад</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default User;