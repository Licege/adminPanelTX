import React from 'react';
import {Table} from "react-bootstrap";

const SettingsTable = ( {settings, postSettings} ) => {
    console.log(settings[0]);
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
                    <tbody>
                    {settings.map(s => (
                        <tr key={s._id}>
                            <td><input type='checkbox' checked={s.is_delivery} value={s.is_delivery} disabled/></td>
                            <td>{s.city}</td>
                            <td>{s.price_for_delivery}</td>
                            <td>{s.free_delivery}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table> : ''}
            </div>
        </div>
    )
};

export default SettingsTable;