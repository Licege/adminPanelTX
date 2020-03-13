import React from 'react';
import {createField, Input} from "../../common/FormsControls";
import {reduxForm} from "redux-form";

const Vacancy = ( {handleSubmit, cancel} ) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Создание вакансии
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                {createField("Название", "title",[], Input)}
                            </div>

                            <div>
                                {createField("Требования", "requirements", [], Input)}
                            </div>

                            <div>
                                {createField("Описание", "description", [], Input)}
                            </div>

                            <div>
                                {createField("Зп от", "salary_from", [], Input)}
                            </div>

                            <div>
                                {createField("Зп до", "salary_to", [], Input)}
                            </div>

                            <div>
                                {createField("url", "url", [], Input)}
                            </div>

                            <button type='submit'>Сохранить</button>
                            <button type='button' onClick={(e) => cancel()}>Отменить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const CreateVacancyReduxForm = reduxForm({form: 'create-vacancy'})(Vacancy);
export default CreateVacancyReduxForm;