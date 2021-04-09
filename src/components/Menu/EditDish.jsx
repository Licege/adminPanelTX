import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {updateDish, deleteDish, requestCategories, requestDish} from '../../redux/thunks/menu.thunks'
import {showModal} from '../../redux/reducers/modals.reducer'
import Header from './Form/Header'
import FormDish from './Form/FormDish'
import {getCategories, getCurrentDish} from '../../redux/getters/menu.getters'

const EditDish = query => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { match: { params: { id } } } = query

  useEffect(() => {
    dispatch(requestCategories())
    dispatch(requestDish(id))
  }, [])

  const [file, setFile] = useState('')
  const dish = useSelector(getCurrentDish)
  const categories = useSelector(getCategories)

  const onRemove = () => dispatch(deleteDish(id))

  const openDelModal = () => dispatch(showModal({ name: 'SIMPLE_DELETE', props: { title: 'блюдо', onRemove } }))

  const uploadFile = file => setFile(file)

  const editDish = dish => {
    let formData = new FormData()
    for (let key in dish) {
      if (dish.hasOwnProperty(key)) formData.append(key, dish[key])
    }
    formData.append('image', file)
    dispatch(updateDish({ dish: formData, id: dish.id }))
    history.push('/menu')
  }

  const cancel = () => {
    history.push('/menu')
  }

  if (!dish) return <div />

  return (
    <div className="form_dish">
      <Header title={dish.title} openDelModal={openDelModal} />
      <div className="page-container">
        <div className="card">
          <div className="card-body">
            <FormDish onSubmit={editDish} onCancel={cancel} initialValues={dish} categories={categories} uploadFile={uploadFile} dishImageSrc={dish.imageSrc} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditDish