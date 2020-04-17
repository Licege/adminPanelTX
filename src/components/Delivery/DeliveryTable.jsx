import React from 'react'
import Table from "react-bootstrap/Table";
import {deliveryHD} from '../../plagins/hardData'
import {tsToDate} from "../../plagins/helpers";
import Paginator from "../common/Paginator";

const DeliveryTable = ({orders, detail, totalCount, page, onChangePage}) => {
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
            <tbody>
            {orders.length ? orders.map(order => (
                <tr key={order._id} onClick={detail(order._id)}>
                    <td><a href={'tel:' + order.phone}>{order.phone}</a></td>
                    <td>{`Товаров: ${order.list.reduce((acc, order) => acc + order.count, 0)}`}</td>
                    <td>{order.total_price + order.delivery_cost} ₽</td>
                    <td>{tsToDate(order.create_at, 'hh:mm dd:MM:YYYY')}</td>
                    <td>{deliveryHD.deliveryType[order.delivery_type]}</td>
                    <td>В доработке</td>
                    <td>{deliveryHD.paymentType[order.payment_type]}</td>
                    <td>{deliveryHD.status[order.payment_status]}</td>
                    <td>{deliveryHD.paymentStatuses[order.status]}</td>
                </tr>)) : null
            }
            </tbody>
        </Table>
        <Paginator totalItemsCount={totalCount} currentPage={page} pageSize={5} onPageChanged={onChangePage} />
        </>
    )
}


export default DeliveryTable