import React from 'react'
import { Table } from 'react-bootstrap'
import deleteButton from '../../static/img/close.png'
import { getProfessionNameById } from '../../plugins/helpers'

const Employees = ( props ) => {
    console.log(props.professions)
    console.log(props.employees)
    return (
        <div>
            <div className='page-header -action'>
                <div className='page-header-title'>
                    Сотрудники
                </div>
                <div className='page-header-action'>
                    <button className='btn btn-primary' onClick={props.createNewEmployee}>Добавить нового сотрудника
                    </button>
                </div>
            </div>

            <div className='page-container'>
                <div className='card filter'>
                    <div className='card-body filter-container'>
                        <span className='filter-header'>Фильтры</span>
                        <div className='filter-main'>
                            <input type='text' placeholder='Фамилия' className='filter-main-input -name form-control'/>
                            <input type='text' placeholder='Имя' className='filter-main-input -name form-control'/>
                            <input type='text' placeholder='Должность'
                                   className='filter-main-input -name form-control'/>
                        </div>
                        <div className='filter-actions'>
                            <span className='filter-actions-reset'>Сбросить</span>
                            <span className='filter-actions-apply'>Фильтровать</span>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        {props.employees.length && props.professions.length ? <Table responsive>
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
                            {props.employees.map(employee => (
                                <tr key={employee.id}>
                                    <td onClick={props.detail(employee.id)}>{getProfessionNameById(props.professions, employee.profession)}</td>
                                    <td onClick={props.detail(employee.id)}>{employee.surname}</td>
                                    <td onClick={props.detail(employee.id)}>{employee.name}</td>
                                    <td onClick={props.detail(employee.id)}>{employee.phone}</td>
                                    <td onClick={props.detail(employee.id)}>{employee.address}</td>
                                    <td>
                                        <button onClick={props.delete(employee.id)}><img src={deleteButton}
                                                                                         alt="Удалить"/></button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees
