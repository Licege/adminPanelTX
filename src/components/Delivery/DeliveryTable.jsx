import React from 'react'
import Table from "react-bootstrap/Table";

const DeliveryTable = ({orders, detail}) => {
    const paymentStatuses = {
        '0': 'Неоплачен'
    }
    const status = {
        '0': 'Необработан'
    }
    const deliveryType = {
        'home': 'Доставка',
        'restaurant': 'Самовывоз'
    }
    const paymentType = {
        'cash': 'Наличными'
    }

    return (
        <Table responsive>
            <thead className='table-thread'>
            <tr>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Заказ</th>
                <th>Сумма</th>
                <th>Создан</th>
                <th>Тип доставки</th>
                <th>Дата и время доставки</th>
                <th>Тип оплаты</th>
                <th>Статус оплаты</th>
                <th>Статус заказа</th>
            </tr>
            </thead>
            <tbody>
            {orders.length ? orders.map(order => (
                <tr key={order._id} onClick={detail(order._id)}>
                    <td>{order.surname}</td>
                    <td><a href={'tel:' + order.phone}>{order.phone}</a></td>
                    <td>{`Товаров: ${order.list.length}`}</td>
                    <td>{order.total_price + order.delivery_cost}</td>
                    <td>{order.create_at}</td>
                    <td>{deliveryType[order.delivery_type]}</td>
                    <td>В доработке</td>
                    <td>{paymentType[order.payment_type]}</td>
                    <td>{status[order.payment_status]}</td>
                    <td>{paymentStatuses[order.status]}</td>
                </tr>)) : null
            }
            </tbody>
        </Table>
    )
}


export default DeliveryTable