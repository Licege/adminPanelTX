import styles from "../assets/styles/styles";
import React from "react";
import {Table} from "react-bootstrap";
import Paginator from "../common/Paginator";

const Users = (props) => {
    return (
        <div>
            <div style={styles.Header}>
                <div style={styles.HeaderTitle}>
                    Пользователи
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
                            <span className='filter-actions-apply'>Фильтровать</span>
                        </div>
                    </div>
                </div>

                <div style={styles.Card}>
                    <Table responsive>
                        <thead className='table-thread'>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>E-mail</th>
                            <th>Телефон</th>
                            <th>Баллы</th>
                        </tr>
                        </thead>
                        <tbody>
                            { props.users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.surname}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.bonus_points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Paginator totalItemsCount={323} currentPage={2} pageSize={10} onPageChanged={props.onPageChanged} />
                </div>
            </div>
        </div>
    )
};

export default Users;