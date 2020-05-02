import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Button} from "react-bootstrap";

const NewsForm = ({handleSubmit, uploadFile, news, cancel}) => (
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
                                   name='short_description'
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
                            <input name='image' type='file' onChange={uploadFile}/>
                        </div>
                        <Button onClick={cancel} variant='outline-secondary'>Отменить</Button>
                        <Button type='submit' variant='primary'>Сохранить</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

const NewsReduxForm = reduxForm({form: 'news-form', enableReinitialize: true})(NewsForm);
export default NewsReduxForm;