import React from 'react'
import Table from "react-bootstrap/Table";
import {deliveryHD} from '../../plagins/hardData'
import {tsToDate} from "../../plagins/helpers";
import Paginator from "../common/Paginator";

const DeliveryTable = ({orders, menu, detail, totalCount, page, onChangePage}) => {
    return (
        <>
        <Table responsive>
            <thead className='table-thread'>
            <tr>
                <th>Телефон</th>
                <th>Заказ</th>
                <th>Сумма</th>
                <th>Создан</th>
                <th>Тип доставки</th>
                <th>Дата и время доставки</th>
                <th>Тип оплаты</th>
                <th>Статус заказа</th>
                <th>Статус оплаты</th>
            </tr>
            </thead>
            <tbody className='table-body'>
            {orders.length ? orders.map((order, key) => (
                <tr key={key}>
                    <td><a href={'tel:' + order.phone}>{order.phone}</a></td>
                    <td>{`Товаров: ${order.list.reduce((acc, order) => acc + order.count, 0)}`}</td>
                    <td onClick={detail(order._id)}>{order.total_price + order.delivery_cost} ₽</td>
                    <td onClick={detail(order._id)}>{tsToDate(order.create_at, 'hh:mm dd:MM:YYYY')}</td>
                    <td onClick={detail(order._id)}>{deliveryHD.deliveryType[order.delivery_type]}</td>
                    <td onClick={detail(order._id)}>{order.time_delivery ?  tsToDate(order.time_delivery, 'hh:mm dd:MM:YYYY') : 'Не указано'}</td>
                    <td onClick={detail(order._id)}>{deliveryHD.paymentType[order.payment_type]}</td>
                    <td onClick={detail(order._id)}>{deliveryHD.status[order.status]}</td>
                    <td onClick={detail(order._id)}>{deliveryHD.paymentStatuses[order.payment_status]}</td>
                </tr>)) : null
            }
            </tbody>
        </Table>
        <Paginator totalItemsCount={totalCount} currentPage={page} pageSize={5} onPageChanged={onChangePage} />
        </>
    )
}


export default DeliveryTable
