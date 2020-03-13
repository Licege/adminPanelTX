import React from 'react'
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls";
import {Button} from "react-bootstrap";

const CreateNews = ( {handleSubmit, cancel} ) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Добавление новости
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                {createField("Название", "label", [], Input)}
                            </div>
                            <div>
                                {createField("Описание новости", "content", [], Textarea)}
                            </div>
                            <Button type='submit' variant='primary'>Создать новость</Button>
                            <Button onClick={(e) => cancel()} variant='outline-warning'>Отменить</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const CreateNewsReduxForm = reduxForm({form: 'create-news'}) (CreateNews);
export default CreateNewsReduxForm;