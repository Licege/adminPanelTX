import React from 'react'

const Admin = ({admins, newAdmin}) => {
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
        </div>
    )
}

export default Admin;