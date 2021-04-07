import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form } from 'react-final-form'
import Button from 'react-bootstrap/Button'
import { SCInputField } from './styledComponents'
import { PageHeader } from '../../styledComponents/components'
import { getContacts } from '../../redux/getters/contacts.getters'
import { fetchContacts, updateContacts as updateContactsThunk } from '../../redux/thunks/contats.thunks'
import InputsList from '../common/InputsList'

const FIELDS = [
    { name: 'phone', placeholder: 'Телефон' },
    { name: 'address', placeholder: 'Адрес' },
    { name: 'vk', placeholder: 'Вконтакте' },
    { name: 'fb', placeholder: 'Facebook' },
    { name: 'tg', placeholder: 'Телеграм' },
    { name: 'inst', placeholder: 'Instagram' },
    { name: 'google', placeholder: 'Google' },
    { name: 'tw', placeholder: 'Twitter' },
]


const RenderForm = ({ handleSubmit, submitting, pristine, cancel, openHours, handleInputField }) => (
  <form onSubmit={handleSubmit}>
      {FIELDS.map(({ ...fieldProps }) => <SCInputField {...fieldProps} />)}
      <div>
        <div className="mb-3">Часы работы (укажите часы работы в формате ПН-ПТ: 12:00 - 01:00)
        </div>
        <InputsList items={openHours} placeholder='Добавьте часы работы' onChange={handleInputField} />
      </div>
      <Button variant="primary" type="submit" disabled={submitting || pristine}>Изменить</Button>
      <Button variant="outline-secondary" type="button"
              onClick={cancel}
      >
          Отменить
      </Button>
  </form>
)


const Contact = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
  const [openHours, setOpenHours] = useState([''])

  useEffect(() => {
    dispatch(fetchContacts())
  }, [])

  useEffect(() => {
    console.log(contacts.openHours)
    setOpenHours([...contacts.openHours, ''])
  }, [contacts])

  const updateContacts = useCallback(contacts => dispatch(updateContactsThunk(contacts)), [contacts])
  const cancel = useCallback(() => console.log('Отмена не готова'), [])

  const handleInputField = useCallback(list => setOpenHours(list), [])

  if (!contacts) return null
  const props = { handleInputField, cancel, openHours }

  return (
    <div>
      <PageHeader title='Контакты' />
      <div className="page-container">
        <div className="card">
          <div className="card-body">
            <Form onSubmit={updateContacts} render={({ ...formProps }) => <RenderForm {...formProps} {...props} />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
