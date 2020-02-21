import React from "react";
import {Table} from "react-bootstrap";

const Employees = (props) => {
    return (
        <div>
            <div className='page-header -action'>
                <div className='page-header-title'>
                    Сотрудники
                </div>
                <div className='page-header-action'>
                    <button className='btn btn-primary' onClick={props.createNewEmployee}>Добавить нового сотрудника</button>
                </div>
            </div>

            <div className='page-container'>
                <div className='card filter'>
                    <div className='card-body filter-container'>
                        <span className='filter-header'>Фильтры</span>
                        <div className='filter-main'>
                            <input type='text' placeholder='Фамилия' className='filter-main-input -name form-control' />
                            <input type='text' placeholder='Имя' className='filter-main-input -name form-control' />
                            <input type='text' placeholder='Должность' className='filter-main-input -name form-control' />
                        </div>
                        <div className='filter-actions'>
                            <span className='filter-actions-reset'>Сбросить</span>
                            <span className='filter-actions-apply'>Фильтровать</span>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        <Table responsive>
                            <thead className='table-thread'>
                            <tr>
                                <th>Должность</th>
                                <th>Фамилия</th>
                                <th>Имя</th>
                                <th>Телефон</th>
                                <th>Адрес</th>
                            </tr>
                            </thead>
                            <tbody>
                            { props.employees.map(employee => (
                                <tr key={employee.id} onClick={(e) => props.detail(employee.id)}>
                                    <td>{employee.profession}</td>
                                    <td>{employee.surname}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.address}</td>
                                    <td>Кнопка удалить</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Employees;