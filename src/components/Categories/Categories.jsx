import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import CategoriesTable from './CategoriesTable'
import { PageHeader } from '../../styledComponents/components'

const Categories = () => {
  const history = useHistory()
  const createCategory = () => history.push(`categories/new`)

  return (
    <div className="page">
      <PageHeader title='Категории'>
        <Button variant="primary" onClick={createCategory}>Добавить категорию</Button>
      </PageHeader>
      <div className="page-container">
        <CategoriesTable />
      </div>
    </div>
  )
}

export default Categories
