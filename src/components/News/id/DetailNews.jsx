import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls";
import {Button} from "react-bootstrap";

const DetailNews = ( {handleSubmit, deleteNews, cancel} ) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={handleSubmit}>
                    <div>
                        {createField("Название", "label", [], Input)}
                    </div>
                    <div>
                        {createField("Описание новости", "content", [], Textarea)}
                    </div>
                    <div>
                        <Button variant='primary' type='submit'>Сохранить</Button>
                        <Button variant='secondary' onClick={(e) => cancel()}>Отменить</Button>
                        {/*<Button variant='danger' onClick={(e) => deleteNews()}>Удалить</Button>*/}
                    </div>
                </form>
            </div>
        </div>
    )
};

const EditNewsReduxForm = reduxForm({form: 'edit-news'}) (DetailNews);
export default EditNewsReduxForm;