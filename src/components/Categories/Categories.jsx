import React from 'react'
import { Button, Table } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete'

const Categories = ({ categories, createCategory, updateCategory, deleteCategory }) => {
    return (
        <div className='page'>
            <div className='page-header -action'>
                <div className='page-header-title'>Категории</div>
                <div className='page-header-action'>
                    <Button variant='primary' onClick={createCategory}>Добавить категорию</Button>
                </div>
            </div>
            <div className='page-container'>
                {categories?.length ?
                    <div className='card'>
                        <Table responsive>
                            <thead className='table-thread'>
                            <tr>
                                <th>Название</th>
                                <th>Ссылка в адресной строке</th>
                                <th>Доставка</th>
                                <th/>
                            </tr>
                            </thead>
                            <tbody className='table-body'>
                            {categories.map(category => (
                                <tr key={category.id} onClick={updateCategory(category.id)}>
                                    <td>{category.title}</td>
                                    <td>{category.titleEn}</td>
                                    <td>
                                        <input type='checkbox' checked={category.isDelivery}
                                               value={category.isDelivery} disabled/>
                                    </td>
                                    <td><DeleteIcon onClick={deleteCategory(category.id)}/></td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default Categories
