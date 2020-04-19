import React from "react";
import {Table} from "react-bootstrap";
import Paginator from "../common/Paginator";

const Users = (props) => {
    console.log(props.users);
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Пользователи
                </div>
            </div>
            <div className='page-container'>
                <div className='card filter'>
                    <div className='card-body filter-container'>
                        <span className='filter-header'>Фильтры</span>
                        <div className='filter-main'>
                            <input type='text' placeholder='Фамилия' className='filter-main-input -name form-control' />
                            <input type='text' placeholder='Имя' className='filter-main-input -name form-control' />
                        </div>
                        <div className='filter-actions'>
                            <span className='filter-actions-reset'>Сбросить</span>
                            <span className='filter-actions-apply' onClick={(e) => props.filterApply(props.filters)}>Фильтровать</span>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        {props.users ? <><Table responsive>
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
                            {props.users.map(user => (
                                <tr key={user._id} onClick={props.detail(user._id)}>
                                    <td>{user.surname}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.bonus_points}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        <Paginator totalItemsCount={props.totalUsersCount} currentPage={props.currentPage} pageSize={10} onPageChanged={props.onPageChanged} /></> : null }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Users;