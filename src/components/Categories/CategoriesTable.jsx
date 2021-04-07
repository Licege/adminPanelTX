import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { getCategories } from '../../redux/getters/menu.getters'
import { deleteCategory } from '../../redux/thunks/menu.thunks'

const CustomTable = ({ children }) => (
  <Table responsive>
    <thead className="table-thread">
    <tr>
      <th>Название</th>
      <th>Ссылка в адресной строке</th>
      <th>Доставка</th>
      <th />
    </tr>
    </thead>
    <tbody className="table-body">
    {children}
    </tbody>
  </Table>
)

const Categories = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const categories = useSelector(getCategories)

  const updateCategory = id => () => history.push(`categories/edit/${id}`)
  const removeCategory = id => event => {
    event.stopPropagation()
    dispatch(deleteCategory(id))
  }

  if (!categories.length) return null

  return (
    <CustomTable>
      {categories.map(category => (
        <tr key={category.id} onClick={updateCategory(category.id)}>
          <td>{category.title}</td>
          <td>{category.titleEn}</td>
          <td>
            <input type="checkbox" checked={category.isDelivery}
                   value={category.isDelivery} disabled
            />
          </td>
          <td><span onClick={removeCategory(category.id)}>Удалить</span></td>
        </tr>
      ))}
    </CustomTable>
  )
}

export default Categories
