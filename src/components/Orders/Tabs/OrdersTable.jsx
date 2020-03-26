import React from 'react'
import {Table} from "react-bootstrap";
import {tsToDate} from "../../../plagins/helpers";

const OrdersTable = ( {ordersTable} ) => {
    console.log(ordersTable)
    return (
        <div className='card'>
            <div className='card-body'>
                <Table responsive>
                    <thead className='table-thread'>
                        <tr>
                            <th>Дата бронирования</th>
                            <th>Бронь</th>
                            <th>Посетитель</th>
                            <th>Телефон</th>
                            <th>Кол-во персон</th>
                            <th>Пожелания</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ordersTable.map(orderTable => (
                            <tr key={orderTable.id}>
                                <th>{tsToDate(orderTable.date, "hh:mm dd:MM:YYYY")}</th>
                                <th>{tsToDate(orderTable.create_at, "hh:mm dd:MM:YYYY")}</th>
                                <th>{orderTable.name}</th>
                                <th>{orderTable.phone}</th>
                                <th>{orderTable.count}</th>
                                <th>{orderTable.comment}</th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
};

export default OrdersTable;