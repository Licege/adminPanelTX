import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import Header from './Form/Header'
import FormDish from './Form/FormDish'
import { createDish as createDishThunk, requestCategories } from '../../redux/thunks/menu.thunks'
import {getCategories} from '../../redux/getters/menu.getters'

const CreateDish = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestCategories())
  }, [])

  const [file, setFile] = useState('')
  const categories = useSelector(getCategories)

  const uploadFile = file => setFile(file)

  const createDish = dish => {
    let formData = new FormData()
    for (let key in dish) {
      formData.append(key, dish[key])
    }
    formData.weight = parseInt(formData.weight, 10)
    formData.price = parseInt(formData.price, 10)
    formData.append('image', file)
    dispatch(createDishThunk(formData))
    history.push('/menu')
  }

  const cancel = () => {
    history.push('/menu')
  }

  return (
    <div className="form_dish">
      <Header />
      <div className="page-container">
        <div className="card">
          <div className="card-body">
            <FormDish onSubmit={createDish} onCancel={cancel} categories={categories} uploadFile={uploadFile} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateDish