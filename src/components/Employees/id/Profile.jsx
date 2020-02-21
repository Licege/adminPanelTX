import React from "react";


const Profile = ({employee}) => {
    return (
        employee && <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Редактирование профиля: {employee.name}
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <div>Фамилия: {employee.surname}</div>
                        <div>Имя: {employee.name}</div>
                        <div>E-mail: {employee.email}</div>
                        <div>Телефон: {employee.phone}</div>
                        <div>Бонусы: {employee.bonus_points}</div>
                        <button>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;