import React, {useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CardDish from '../common/element/CardDish'
import {PageHeader} from '../../styledComponents/components'
import {getCategories, getMenu} from '../../redux/getters/menu.getters'
import {deleteDish, requestCategories, requestDishes} from '../../redux/thunks/menu.thunks'
import {showModal} from '../../redux/reducers/modals.reducer'

const Menu = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const dishes = useSelector(getMenu)
  const categories = useSelector(getCategories)

  useEffect(() => {
    dispatch(requestCategories())
    dispatch(requestDishes())
  }, [])

  const onUploadPDFMenu = ({ target }) => {
    if (target.files.length) console.log(target.files[0])
  }

  const redirectToCreateDish = () => history.push(`menu/new`)

  const redirectToEditDish = id => () => history.push(`menu/edit/${id}`)

  const onRemove = id => () => dispatch(deleteDish(id))

  const openDelModal = id => () => dispatch(showModal({ name: 'SIMPLE_DELETE', props: { title: 'блюдо', onRemove: onRemove(id) } }))

  return (
        <div>
            <PageHeader title='Меню'>
                <button className='btn btn-primary' onClick={redirectToCreateDish}>Добавить блюдо</button>
            </PageHeader>
            <div className='page-container'>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <h4>PDF-меню:</h4>
                        <input type='file' accept="application/pdf" onChange={onUploadPDFMenu} />
                    </div>
                </div>

                <div className='card'>
                    <h4 className='menu-header'>~ Блюда ~</h4>
                    <div className='card-body menu-content'>
                        {dishes.map(( dish, key ) =>
                            <CardDish dish={dish}
                                      key={key}
                                      categories={categories}
                                      remove={openDelModal(dish.id)}
                                      detail={redirectToEditDish} />
                                      )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
