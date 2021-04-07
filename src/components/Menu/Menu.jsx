import React from 'react'
import CardDish from '../common/element/CardDish'
import {PageHeader} from '../../styledComponents/components'

const Menu = ({ dishes, categories, newDish, openDelModal, detail, onPhotoSelected }) => {
    return (
        <div>
            <PageHeader title='Меню'>
                <button className='btn btn-primary' onClick={newDish}>Добавить блюдо</button>
            </PageHeader>
            <div className='page-container'>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <h4>PDF-меню:</h4>
                        <input type='file' accept="application/pdf" onChange={onPhotoSelected}/>
                    </div>
                </div>

                <div className='card'>
                    <h4 className='menu-header'>~ Блюда ~</h4>
                    <div className='card-body menu-content'>
                        {dishes.map(( dish, key ) =>
                            <CardDish dish={dish}
                                      key={key}
                                      categories={categories}
                                      remove={openDelModal(dish)}
                                      detail={detail}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
