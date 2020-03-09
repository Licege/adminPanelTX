import React from 'react';
import {getProfessionNameById} from "../../../plagins/helpers";

const Employee = ({ employee, professions, goEditMode, cancel }) => {
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
                        <div>Фамилия: {employee.surname}</div>
                        <div>Имя: {employee.name}</div>
                        <div>Должность: {getProfessionNameById(professions, employee.profession)}</div>
                        <div>Телефон: {employee.phone}</div>
                        <div>Адрес: {employee.address}</div>
                        <div>ID файла: {employee.file_id}</div>
                        <button onClick={goEditMode}>Изменить</button>
                        <button onClick={cancel}>Назад</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Employee;