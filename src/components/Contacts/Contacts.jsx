import React from 'react';
import { reduxForm } from "redux-form";
import {createField, Input} from "../common/FormsControls";
import Button from "react-bootstrap/Button";

const Contact = ( {contacts, handleSubmit, cancel} ) => {
    return (
        contacts && <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Контакты
                </div>
            </div>

            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                {createField("Телефон", "phone", [], Input)}
                            </div>

                            <div>
                                {createField("Адрес", "address", [], Input)}
                            </div>

                            <div>
                                {createField("Вконтакте", "vk", [], Input)}
                            </div>

                            <div>
                                {createField("Facebook", "fb", [], Input)}
                            </div>

                            <div>
                                {createField("Телеграм", "tg", [], Input)}
                            </div>

                            <div>
                                {createField("Instagram", "inst", [], Input)}
                            </div>

                            <div>
                                {createField("Google", "google", [], Input)}
                            </div>

                            <div>
                                {createField("Twitter", "tw", [], Input)}
                            </div>

                            <Button variant='primary' type='submit'>Изменить</Button>
                            <Button variant='outline-secondary' type='button' onClick={(e) => cancel() }>Отменить</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ContactEditReduxForm = reduxForm({form: 'contact', enableReinitialize: true})(Contact);
export default ContactEditReduxForm;