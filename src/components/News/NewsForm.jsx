import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'
import ImageInput from '../common/imageInput'

const NewsForm = ({ handleSubmit, uploadFile, news, cancel }) => (
    <div>
        <div className='page-header'>
            <div className='page-header-title'>
                {news ? news.title : 'Добавление новости'}
            </div>
        </div>
        <div className='page-container'>
            <div className='card'>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field className="filter-main-input -name form-control"
                                   name='title'
                                   placeholder='Название'
                                   component='input'/>
                        </div>
                        <div>
                            <Field className="filter-main-input -name form-control"
                                   name='shortDescription'
                                   placeholder='Краткое описание новости'
                                   component='textarea'/>
                        </div>
                        <div>
                            <Field className="filter-main-input -name form-control"
                                   name='description'
                                   placeholder='Полное описание новости'
                                   component='textarea'/>
                        </div>
                        <div>
                            <ImageInput value={news ? news.imageSrc : ''} onChange={uploadFile} allowClear={true}/>
                        </div>
                        <Button onClick={cancel} variant='outline-secondary'>Отменить</Button>
                        <Button type='submit' variant='primary'>Сохранить</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

const NewsReduxForm = reduxForm({ form: 'news-form', enableReinitialize: true })(NewsForm)
export default NewsReduxForm
