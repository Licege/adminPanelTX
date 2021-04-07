import React from 'react'
import { Field } from 'react-final-form'
import { Table, Button } from 'react-bootstrap'
import Form from '../Form/form'
import { deliveryHD } from '../../plugins/hardData'
import { fullLink, tsToDate } from '../../plugins/helpers'
import MenuModal from './MenuModal'
import altImg from '../../static/img/dish.svg'
import {PageHeader} from '../../styledComponents/components'

const DeliveryInfo = ({ order, onSubmit, menu, categories, show, toggleModal, applyFilterModal, addDish, increaseDish, decreaseDish, removeDish, currentCategory }) => {
    return (
        order ?
          <div className='page'>
              <PageHeader title={`Редактирование заказа: №${order.id}`}>
                  <Button variant='primary' type='submit'>Сохранить изменения</Button>
              </PageHeader>
              <Form onSubmit={onSubmit}>
                  <div className='delivery_info'>
                      <div className='delivery_info-block'>
                          <div className='card delivery_info-block-card'>
                              <div className='delivery_info-block-card-title'>Информация о заказе</div>
                              <div className='delivery_info-block-card-item'>
                                  <Field name='delivery_type' component='select' className="form-control">
                                      {Object.keys(deliveryHD.deliveryType).map(type =>
                                        <option value={type} key={type}>{deliveryHD.deliveryType[type]}</option>,
                                      )}
                                  </Field>
                              </div>
                              <div className='delivery_info-block-card-item'>
                                  <Field name='status' component='select' className="form-control"
                                         parse={value => parseInt(value, 10)}>
                                      {Object.keys(deliveryHD.status).map(status =>
                                        <option value={status} key={status}>{deliveryHD.status[status]}</option>,
                                      )}
                                  </Field>
                              </div>
                              <div className='delivery_info-block-card-item'>
                                  <Field name='payment_type' component='select' className="form-control">
                                      {Object.keys(deliveryHD.paymentType).map(status =>
                                        <option value={status} key={status}>{deliveryHD.paymentType[status]}</option>,
                                      )}
                                  </Field>
                              </div>
                              <div className='delivery_info-block-card-item'>
                                  <Field name='payment_status' component='select' className="form-control"
                                         parse={value => parseInt(value, 10)}>
                                      {Object.keys(deliveryHD.paymentStatuses).map(status =>
                                        <option value={status}
                                                key={status}>{deliveryHD.paymentStatuses[status]}</option>,
                                      )}
                                  </Field>
                              </div>
                          </div>
                          <div className='card delivery_info-block-card'>
                              <div className='delivery_info-block-card-title'>Информация о покупателе</div>
                              <div className='delivery_info-block-card-item'>{order.name}</div>
                              <div className='delivery_info-block-card-item'>
                                  {order.email ?
                                <a href={'mailto:' + order.email}>{order.email}</a> : 'не указан'}
                              </div>
                              <div className='delivery_info-block-card-item'>
                                  <a href={'tel:' + order.phone}>{order.phone}</a>
                              </div>
                              <div className='delivery_info-block-card-item'>
                                  {order.userId ?
                                    <>'Сделать ссылку на пользователя'</>
                                    :
                                    <>Не зарегистрирован</>}
                              </div>
                          </div>
                          <div className='card delivery_info-block-card'>
                              <div className='delivery_info-block-card-title'>Информация о стоимости
                              </div>
                              <div className='delivery_info-block-card-item'>
                                  {`Списано бонусов: 0 (В разработке)`}
                              </div>
                              <div className='delivery_info-block-card-item'>
                                  {`Начислено бонусов: 0 (В разработке)`}</div>
                              <div className='delivery_info-block-card-item'>
                                  {`Стоимость доставки: ${order.deliveryCost} ₽`}</div>
                              <div className='delivery_info-block-card-item'>
                                  {`Стоимость заказа: ${order.price} ₽`}
                              </div>
                              <div className='delivery_info-block-card-item'>
                                  {`Общая стоимость заказа: ${order.price + order.deliveryCost} ₽`}
                              </div>
                          </div>
                      </div>

                      <div className='delivery_info-detail'>
                          <div className='delivery_info-detail-title'>
                              Заказ
                          </div>
                          <div className='delivery_info-detail-info'>
                              <div className='delivery_info-detail-info-item'>
                                  Адрес:
                                  г. {order.address.city + ', ' + order.address.street + (order.address.house ? ', д.' + order.address.house : ', номер дома не указан') +
                              (order.address.flat ? ', кв. ' + order.address.flat : '') + (order.address.floor ? ', ' + order.address.floor + ' этаж' : '') +
                              (order.address.intercom ? ', код домофона: ' + order.address.intercom : '')}
                              </div>
                              {order.createdAt && <div className='delivery_info-detail-info-item'>
                                  Дата и время создания заказа: {tsToDate(order.createdAt, 'hh:mm dd MMMM YYYY')}
                              </div>}
                              {order.timeDelivery && <div className='delivery_info-detail-info-item'>
                                  Дата и время доставки заказа: {tsToDate(order.timeDelivery, 'hh:mm dd MMMM YYYY')}
                              </div>}
                              {order.paymentType === 'cash' && order.oddMoney !== 0 &&
                              <div className='delivery_info-detail-info-item'>
                                  Подготовить сдачу с: {order.oddMoney}
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
                                    <tr key={dish.id}>
                                        <td>
                                            <img
                                              src={fullLink(menu.find(item => item.id === dish.id)?.imageSrc) || altImg}
                                              className='delivery_info-detail-table-img'
                                              alt='фото'/>
                                        </td>
                                        <td>{dish.title}</td>
                                        <td>
                                            <Button variant='outline-info' onClick={decreaseDish(dish.id)}>-</Button>
                                            {dish.count}
                                            <Button variant='outline-info' onClick={increaseDish(dish.id)}>+</Button>
                                        </td>
                                        <td>{dish.cost} ₽</td>
                                        <td>{dish.cost * dish.count} ₽</td>
                                        <td><span onClick={removeDish(dish.id)}>Корзина</span></td>
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
                  <MenuModal show={show} menu={menu} categories={categories} applyFilterModal={applyFilterModal}
                             addDish={addDish} currentCategory={currentCategory} handleClose={toggleModal}/>
              </Form>
          </div> : null
    )
}

export default DeliveryInfo;
