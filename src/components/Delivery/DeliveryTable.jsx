import React from 'react'
import { Table } from 'react-bootstrap'
import { format } from 'date-fns'


import { deliveryHD } from '../../plugins/hardData'
import Paginator from '../common/Paginator'

const DeliveryTable = ({ orders, detail, totalCount, page, onChangePage }) => {
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
                {orders?.length ? orders.map(( order, key ) => (
                    <tr key={key}>
                        <td><a href={'tel:' + order.phone}>{order.phone}</a></td>
                        <td>{`Товаров: ${order.list.reduce((acc, order) => acc + order.count, 0)}`}</td>
                        <td onClick={detail(order.id)}>{order.price + order.deliveryCost} ₽</td>
                        <td onClick={detail(order.id)}>{format(new Date(order.createdAt), 'HH:mm dd.MM.yyyy')}</td>
                        <td onClick={detail(order.id)}>{deliveryHD.deliveryType[order.deliveryType]}</td>
                        <td onClick={detail(order.id)}>{order.timeDelivery ? format(new Date(order.timeDelivery), 'HH:mm dd.MM.yyyy') : 'Не указано'}</td>
                        <td onClick={detail(order.id)}>{deliveryHD.paymentType[order.paymentType]}</td>
                        <td onClick={detail(order.id)}>{deliveryHD.status[order.status]}</td>
                        <td onClick={detail(order.id)}>{deliveryHD.paymentStatuses[order.paymentStatus]}</td>
                    </tr>)) : null
                }
                </tbody>
            </Table>
            <Paginator totalItemsCount={totalCount} currentPage={page} pageSize={5} onPageChanged={onChangePage}/>
        </>
    )
}


export default DeliveryTable
