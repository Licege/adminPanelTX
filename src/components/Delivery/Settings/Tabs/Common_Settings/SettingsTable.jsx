import React from 'react'
import { Table } from 'react-bootstrap'

const SettingsTable = ({ settings, editSettings }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                {settings.length ? <Table responsive>
                    <thead className='table-thread'>
                    <tr>
                        <th>Доставка</th>
                        <th>Город</th>
                        <th>Стоимость</th>
                        <th>Бесплатно с</th>
                    </tr>
                    </thead>
                    <tbody className='table-body'>
                    {settings.map(s => (
                        <tr key={s.id} onClick={editSettings(s.id)}>
                            <td><input type='checkbox' checked={s.isDelivery} value={s.isDelivery} disabled/></td>
                            <td>{s.city}</td>
                            <td>{s.priceForDelivery}</td>
                            <td>{s.freeDelivery}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table> : ''}
            </div>
        </div>
    )
}

export default SettingsTable
