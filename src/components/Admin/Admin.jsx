import React from 'react'
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import AdminsTable from "./Tabs/AdminsTable";

const Admin = ({admins, users, newAdmin}) => {
    console.log(admins);
    return (
        <div>
            <div className='page-header -action'>
                <div className='page-header-title'>
                    Администраторы
                </div>
                <div className='page-header-action'>
                    <button className='btn btn-primary' onClick={newAdmin}>Добавить администратора</button>
                </div>
            </div>
            <div className='page-container'>
                <Tab.Container id='admin-container-tabs' defaultActiveKey='admins-tab'>
                    <Nav variant='pills'>
                        <Nav.Item>
                            <Nav.Link eventKey='admins-tab'>Администраторы</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='users-tab'>Пользователи</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='admins-tab'>
                            <AdminsTable admins={admins}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey='users-tab'>

                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    )
}

export default Admin;