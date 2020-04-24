import React from 'react'
import Table from "react-bootstrap/Table";

const AdminsTable = ({admins}) => (
    <div>
        <Table>
            <thead className='table-thread'>
            <tr>
                <th>Email</th>
                <th>ФИО</th>
                <th>Телефон</th>
            </tr>
            </thead>
            <tbody className='table-body'>
            {admins ? admins.map(admin =>
                <tr key={admin._id}>
                    <td>{admin.user_id.email}</td>
                    <td>В разработке</td>
                    <td>В разработке</td>
                </tr>) : null}
            </tbody>
        </Table>
    </div>
)

export default AdminsTable;