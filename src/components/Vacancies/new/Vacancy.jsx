import React from 'react';
import {Field, reduxForm} from "redux-form";
import Button from "react-bootstrap/Button";
import ImageInput from '../../common/imageInput';

const Vacancy = ( {handleSubmit, uploadFile, cancel, vacancy} ) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    {vacancy && vacancy.title ? 'Редактирование вакансии: ' + vacancy.title : 'Создание вакансии'}
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field name='title'
                                       type='text'
                                       component='input'
                                       placeholder='Название'
                                       className='filter-main-input -name form-control' />
                            </div>

                            <div>
                                <Field name='requirements'
                                       type='text'
                                       component='input'
                                       placeholder='Требования'
                                       className='filter-main-input -name form-control' />
                            </div>

                            <div>
                                <Field name='description'
                                       type='text'
                                       component='input'
                                       placeholder='Описание'
                                       className='filter-main-input -name form-control' />
                            </div>

                            <div>
                                <Field name='salary_from'
                                       type='number'
                                       component='input'
                                       placeholder='Зп от'
                                       parse={value => parseInt(value, 10)}
                                       className='filter-main-input -name form-control' />
                            </div>

                            <div>
                                <Field name='salary_to'
                                       type='number'
                                       component='input'
                                       placeholder='Зп до'
                                       parse={value => parseInt(value, 10)}
                                       className='filter-main-input -name form-control' />
                            </div>

                            <div>
                                <ImageInput value={vacancy ? vacancy.imageSrc : ''} onChange={uploadFile} allowClear={true} />
                            </div>

                            <Button variant='primary' type='submit'>Сохранить</Button>
                            <Button variant='secondary' type='button' onClick={cancel}>Отменить</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const CreateVacancyReduxForm = reduxForm({form: 'create-vacancy', enableReinitialize: true})(Vacancy);
export default CreateVacancyReduxForm;
