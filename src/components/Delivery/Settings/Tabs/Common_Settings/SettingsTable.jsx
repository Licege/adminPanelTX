import React from 'react';
import {Table} from "react-bootstrap";
import {getTitleById} from "../../../../../plagins/helpers";

const SettingsTable = ( {settings, cities, postSettings} ) => {
    return (
        <div className='card'>
            <div className='card-body'>
                {settings.length && cities.length && <Table responsive>
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
                        <tr key={s.id}>
                            <td><input type='checkbox' value={s.is_delivery} disabled/></td>
                            <td>{getTitleById(cities, s.city_id)}</td>
                            <td>{s.price_for_delivery}</td>
                            <td>{s.free_delivery}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>}
            </div>
        </div>
    )
};

export default SettingsTable;