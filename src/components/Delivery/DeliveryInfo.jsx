import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {Table, Button} from 'react-bootstrap';
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
import FoodIcon from '@material-ui/icons/Fastfood';
import DeleteIcon from '@material-ui/icons/Delete';
import {fullLink, tsToDate} from '../../plagins/helpers';
import MenuModal from './MenuModal';
import altImg from '../../static/img/dish.svg'

const DeliveryInfo = ({order, handleSubmit, menu, categories, show, toggleModal, applyFilterModal, addDish, increaseDish, decreaseDish, removeDish, currentCategory}) => {
    return (
        order ?
            <form onSubmit={handleSubmit} className='page'>
                <div className='page-header -action'>
                    <div className='page-header-title'>Редактирование заказа: {order._id}</div>
                    <div className='page-header-action'>
                        <Button variant='primary' type='submit'>Сохранить изменения</Button>
                    </div>
                </div>
                <div className='delivery_info'>
                    <div className='delivery_info-block'>
                        <div className='card delivery_info-block-card'>
                            <div className='delivery_info-block-card-title'><MenuBookIcon/>Информация о заказе</div>
                            <div className='delivery_info-block-card-item'>
                                <ShippingIcon/>
                                <Field name='delivery_type' component='select' className="form-control">
                                    {Object.keys(deliveryHD.deliveryType).map(type =>
                                        <option value={type} key={type}>{deliveryHD.deliveryType[type]}</option>
                                    )}
                                </Field>
                            </div>
                            <div className='delivery_info-block-card-item'>
                                <UpdateIcon/>
                                <Field name='status' component='select' className="form-control" parse={value => parseInt(value, 10)}>
                                    {Object.keys(deliveryHD.status).map(status =>
                                        <option value={status} key={status}>{deliveryHD.status[status]}</option>
                                    )}
                                </Field>
                            </div>
                            <div className='delivery_info-block-card-item'>
                                <CreditCardIcon/>
                                <Field name='payment_type' component='select' className="form-control">
                                    {Object.keys(deliveryHD.paymentType).map(status =>
                                        <option value={status} key={status}>{deliveryHD.paymentType[status]}</option>
                                    )}
                                </Field>
                            </div>
                            <div className='delivery_info-block-card-item'>
                                <WalletIcon/>
                                <Field name='payment_status' component='select' className="form-control" parse={value => parseInt(value, 10)}>
                                    {Object.keys(deliveryHD.paymentStatuses).map(status =>
                                        <option value={status} key={status}>{deliveryHD.paymentStatuses[status]}</option>
                                    )}
                                </Field>
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
                                <FoodIcon/>{`Стоимость заказа: ${order.total_price} ₽`}
                            </div>
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
                            {order.comment ? <div>Комментарий к заказу: {order.comment}</div> : null}
                        </div>
                        <div className='delivery_info-detail-table'>
                            <Table responsive>
                                <thead className='table-thread'>
                                <tr className='text-center'>
                                    <th/>
                                    <th>Название</th>
                                    <th>Количество</th>
                                    <th>Цена за единицу</th>
                                    <th>Итого</th>
                                    <th/>
                                </tr>
                                </thead>
                                <tbody>
                                {order.list.map(dish => (
                                    <tr key={dish._id}>
                                        <td>
                                            <img src={fullLink(menu.find(item => item._id === dish._id)?.imageSrc) || altImg}
                                                 className='delivery_info-detail-table-img'
                                                 alt='фото' />
                                        </td>
                                        <td>{dish.title}</td>
                                        <td>
                                            <Button variant='outline-info' onClick={decreaseDish(dish._id)}>-</Button>
                                                {dish.count}
                                            <Button variant='outline-info' onClick={increaseDish(dish._id)}>+</Button>
                                        </td>
                                        <td>{dish.cost} ₽</td>
                                        <td>{dish.cost * dish.count} ₽</td>
                                        <td><DeleteIcon onClick={removeDish(dish._id)} /></td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                        <div className='text-center'>
                            <Button variant='secondary' onClick={toggleModal}>Добавить позицию</Button>
                        </div>
                    </div>
                </div>
                <MenuModal show={show} menu={menu} categories={categories} applyFilterModal={applyFilterModal} addDish={addDish} currentCategory={currentCategory} handleClose={toggleModal} />
            </form> : null
    )
}

let ReduxFormDeliveryInfo = reduxForm({form: 'delivery-info', enableReinitialize: true}) (DeliveryInfo)

export default ReduxFormDeliveryInfo;
