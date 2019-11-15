import styles from "../assets/styles/styles";
import React from "react";
import {Table} from "react-bootstrap";

const Employees = (props) => {
    return (
        <div>
            <div style={styles.Header}>
                <div style={styles.HeaderTitle}>
                    Сотрудники
                </div>
            </div>
            <div style={styles.Page}>
                <div className='card filter'>
                    <div className='card-body filter-container'>
                        <span className='filter-header'>Фильтры</span>
                        <div className='filter-main'>
                            <input type='text' placeholder='Фамилия' className='filter-main-input -name form-control' />
                            <input type='text' placeholder='Имя' className='filter-main-input -name form-control' />
                        </div>
                        <div className='filter-actions'>
                            <span className='filter-actions-reset'>Сбросить</span>
                            <span className='filter-actions-apply'>Сбросить</span>
                        </div>
                    </div>
                </div>

                <div style={styles.Card}>
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
                            <tr key={employee.id}>
                                <td>{employee.profession}</td>
                                <td>{employee.surname}</td>
                                <td>{employee.name}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
};

export default Employees;