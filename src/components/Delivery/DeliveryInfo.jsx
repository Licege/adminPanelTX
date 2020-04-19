import React from 'react'
import {deliveryHD} from '../../plagins/hardData';
import PhoneIcon from '@material-ui/icons/PhoneAndroidRounded';
import MailIcon from '@material-ui/icons/MailOutline';
import AccountIcon from '@material-ui/icons/AccountCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ShippingIcon from '@material-ui/icons/LocalShipping';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import UnVerifiedUserIcon from '@material-ui/icons/PolicyRounded';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';
import UpdateIcon from '@material-ui/icons/Update';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Table} from "react-bootstrap";
import {tsToDate} from "../../plagins/helpers";

const DeliveryInfo = ({order}) => {
    console.log(order);
    return (
        order ? <div className='delivery_info'>
            <div className='delivery_info-block'>
                <div className='card delivery_info-block-card'>
                    <div className='delivery_info-block-card-title'><MenuBookIcon/>Информация о заказе</div>
                    <div className='delivery_info-block-card-item'>
                        <ShippingIcon/>{deliveryHD.deliveryType[order.delivery_type]}
                    </div>
                    <div className='delivery_info-block-card-item'>
                        <UpdateIcon/>{deliveryHD.status[order.status]}
                    </div>
                    <div className='delivery_info-block-card-item'>
                        <CreditCardIcon/>{deliveryHD.paymentType[order.payment_type]}
                    </div>
                    <div className='delivery_info-block-card-item'>
                        <WalletIcon/>{deliveryHD.paymentStatuses[order.payment_status]}
                    </div>
                </div>
                <div className='card delivery_info-block-card'>
                    <div className='delivery_info-block-card-title'><PersonIcon/>Информация о покупателе</div>
                    <div className='delivery_info-block-card-item'><AccountIcon/>{order.surname}</div>
                    <div className='delivery_info-block-card-item'>
                        <MailIcon/>{order.email ? <a href={'mailto:' + order.email}>{order.email}</a> : 'не указан'}
                    </div>
                    <div className='delivery_info-block-card-item'>
                        <PhoneIcon/><a href={'tel:' + order.phone}>{order.phone}</a>
                    </div>
                    <div className='delivery_info-block-card-item'>
                        {order.userId ?
                            <><VerifiedUserIcon/> 'Сделать ссылку на пользователя'</>
                            :
                            <><UnVerifiedUserIcon/> Не зарегистрирован</>}
                    </div>
                </div>
                <div className='card delivery_info-block-card'>
                    <div className='delivery_info-block-card-title'><MonetizationOnIcon/>Информация о стоимости</div>
                    <div className='delivery_info-block-card-item'><MoneyOffIcon/>{`Списано бонусов: 0 (В разработке)`}
                    </div>
                    <div className='delivery_info-block-card-item'>
                        <AttachMoneyIcon/>{`Начислено бонусов: 0 (В разработке)`}</div>
                    <div className='delivery_info-block-card-item'>
                        <ShippingIcon/>{`Стоимость доставки: ${order.delivery_cost} ₽`}</div>
                    <div className='delivery_info-block-card-item'>
                        <ShoppingCartIcon/>{`Общая стоимость заказа: ${order.total_price + order.delivery_cost} ₽`}
                    </div>
                </div>
            </div>

            <div className='delivery_info-detail'>
                <div className='delivery_info-detail-title'>
                    <StorefrontIcon/> Заказ
                </div>
                <div className='delivery_info-detail-info'>
                    <div className='delivery_info-detail-info-item'>
                        Адрес: г. {order.address.city + ', ' + order.address.street + (order.address.house ? ', д.' + order.address.house : ', номер дома не указан') +
                    (order.address.flat ? ', кв. ' + order.address.flat : '') + (order.address.floor ? ', ' + order.address.floor + ' этаж' : '') +
                    (order.address.intercom ? ', код домофона: ' + order.address.intercom : '')}
                    </div>
                    {order.create_at && <div className='delivery_info-detail-info-item'>
                        Дата и время создания заказа: {tsToDate(order.create_at, 'hh:mm dd MMMM YYYY')}
                    </div>}
                    {order.time_delivery && <div className='delivery_info-detail-info-item'>
                        Дата и время доставки заказа: {tsToDate(order.time_delivery, 'hh:mm dd MMMM YYYY')}
                    </div>}
                    {order.paymentType === 'cash' && order.odd_money !== 0 && <div className='delivery_info-detail-info-item'>
                        Подготовить сдачу с: {order.odd_money}
                    </div>}

                </div>
                <div className='delivery_info-detail-table'>
                    <Table responsive>
                        <thead className='table-thread'>
                        <tr>
                            <th>Название</th>
                            <th>Количество</th>
                            <th>Цена за единицу</th>
                        </tr>
                        </thead>
                        <tbody>
                        {order.list.map(dish => (
                            <tr key={dish._id}>
                                <td>{dish.title}</td>
                                <td>{dish.count}</td>
                                <td>{dish.cost}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div> : null
    )
}

export default DeliveryInfo;