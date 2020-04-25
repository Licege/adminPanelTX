import React from 'react'
import {Button, Modal, Table} from "react-bootstrap";

const MenuModal = ({show, handleClose, menu, categories, applyFilterModal, addDish, currentCategory}) => {
    console.log(menu);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <select id='select-category-modal' className='form-control' defaultValue={currentCategory} onChange={applyFilterModal}>
                    <option value=''>Выберите категорию</option>
                    {categories.map(category => (
                        <option value={category.title_en} key={category._id}>{category.title}</option>
                    ))}
                </select>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead className='table-thread'>
                        <tr>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>Добавить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map(dish => (
                            <tr key={dish._id}>
                                <td>{dish.title}</td>
                                <td>{dish.cost} ₽</td>
                                <td><Button variant='outline-primary' onClick={addDish(dish)}>+</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={handleClose}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MenuModal