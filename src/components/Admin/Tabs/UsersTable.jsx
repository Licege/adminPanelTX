import React from 'react'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import AdminIcon from '@material-ui/icons/HowToReg'

const UserTable = ({users, admins, upgrade}) => {
    const isAdmin = (id) => {
        return admins.findIndex(admin => admin.user_id._id === id)
    }

    return (
        <div>
            <Table>
                <thead className='table-thread'>
                <tr>
                    <th>Email</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.email}</td>
                        <td>{isAdmin(user._id) === -1
                            ? <Button variant='outline-primary' onClick={upgrade(user)}>+</Button>
                            : <AdminIcon/>}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default UserTable;