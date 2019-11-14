import styles from "../assets/styles/styles";
import React from "react";
import {Table} from "react-bootstrap";

const Users = (props) => {
    return (
        <div>
            <div style={styles.Header}>
                <div style={styles.HeaderTitle}>
                    Пользователи
                </div>
            </div>
            <div style={styles.Page}>
                <div style={styles.Card}>
                    <Table responsive>
                        <thead className={'table-thread'}>
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
                </div>
            </div>
        </div>
    )
};

export default Users;