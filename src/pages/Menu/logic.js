import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import {getCategories, getCurrentDish, getMenu} from '../../redux/getters/menu.getters'
import {
  createDish as createDishThunk,
  deleteDish,
  requestCategories,
  requestDish,
  requestDishes,
  updateDish
} from '../../redux/thunks/menu.thunks'
import {showModal} from '../../redux/reducers/modals.reducer'

const useDishes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestDishes())
  }, [])

  return useSelector(getMenu)
}

const useDish = id => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestDish(id))
  }, [])

  return useSelector(getCurrentDish)
}

const useCategories = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestCategories())
  }, [])

  return useSelector(getCategories)
}

export const useMenuLogic = () => {
  const history = useHistory()
  const redirectToCreateDish = () => history.push(`menu/new`)

  const onUploadPDFMenu = ({ target }) => {
    if (target.files.length) console.log(target.files[0])
  }

  return { redirectToCreateDish, onUploadPDFMenu }
}

export const useMenuCardsLogic = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const dishes = useDishes()
  const categories = useCategories()

  const redirectToEditDish = id => () => history.push(`menu/edit/${id}`)

  const onRemove = id => () => dispatch(deleteDish(id))

  const openDelModal = id => () => dispatch(showModal({ name: 'SIMPLE_DELETE', props: { title: 'блюдо', onRemove: onRemove(id) } }))

  return {
    dishes,
    categories,
    redirectToEditDish,
    openDelModal
  }
}

export const useCreateDishLogic = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [file, setFile] = useState('')
  const categories = useCategories()

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

  return { categories, createDish, uploadFile, cancel }
}

export const useEditDishLogic = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { id } = useParams()

  const [file, setFile] = useState('')
  const dish = useDish(id)
  const categories = useCategories()

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

  return {
    dish,
    categories,
    editDish,
    cancel,
    openDelModal,
    uploadFile
  }
}