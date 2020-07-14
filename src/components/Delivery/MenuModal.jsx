import React from 'react'
import {Button, Modal, Table} from 'react-bootstrap';
import {fullLink} from '../../plagins/helpers';
import altImg from '../../static/img/dish.svg';

const MenuModal = ({show, handleClose, menu, categories, applyFilterModal, addDish, currentCategory}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <select id='select-category-modal' className='form-control' defaultValue={currentCategory}
                        onChange={applyFilterModal}>
                    <option value=''>Выберите категорию</option>
                    {categories.map(category => (
                        <option value={category.title_en} key={category._id}>{category.title}</option>
                    ))}
                </select>
            </Modal.Header>
            <Modal.Body>
                <Table className='delivery_info-modal'>
                    <thead className='table-thread'>
                    <tr className='text-center'>
                        <th/>
                        <th>Название</th>
                        <th>Цена</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {menu.map(dish => (
                        <tr className='text-center' key={dish._id}>
                            <td><img src={fullLink(dish.imageSrc) || altImg}
                                     className='delivery_info-modal-img'
                                     alt='фото'/></td>
                            <td>{dish.title}</td>
                            <td>{dish.cost} ₽</td>
                            <td><Button variant='outline-primary' onClick={addDish(dish)}>+</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button variant='primary' onClick={handleClose}>Назад</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MenuModal
