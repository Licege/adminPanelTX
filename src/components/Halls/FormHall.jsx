import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createField, Input, Textarea } from '../common/FormsControls'
import Button from 'react-bootstrap/Button'

const FormHall = ( { hall } ) => (
    <>
        <div className='page-header'>
            <div className='page-header-title'>
                {hall ? hall.title : 'Добавление нового зала'}
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <form>
                            <div>
                                {createField('Название', 'title', [], Input)}
                            </div>
                            <div>
                                {createField('Вместимость', 'capacity', [], Input)}
                            </div>
                            <div>
                                {createField('Описание', 'description', [], Textarea)}
                            </div>

                            <Button variant='primary' type='submit'>Сохранить</Button>
                            <Button variant='secondary' type='button' onClick={cancel}>Отменить</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
)

let HallReduxForm = reduxForm({ form: 'hall-form', enableReinitialize: true })(FormHall)
export default HallReduxForm
