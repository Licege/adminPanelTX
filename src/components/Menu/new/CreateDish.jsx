import React from 'react';
import {createField, Input} from "../../common/FormsControls";
import {Field, reduxForm} from "redux-form";
import ImageInput from "../../common/imageInput";

const CreateDish = ( {handleSubmit, categories, cancel, postFile, deleteFile} ) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Добавление нового блюда
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
                                {createField("Описание", "description", [], Input)}
                            </div>
                            <div>
                                <label>Категории</label>
                                <div>
                                    <Field name="category_id" component="select" >
                                        <option></option>
                                        {categories.map(p => {
                                            return <option value={p.id} key={p.id}>{p.title}</option>
                                        })}
                                    </Field>
                                </div>
                            </div>
                            <div>
                                {createField("Вес порции (г.)", "weight", [], Input)}
                            </div>

                            <div>
                                {createField("Цена", "price", [], Input)}
                            </div>
                            <div>
                                <input type='file' onChange={postFile} />
                            </div>
                            <button type='submit'>Сохранить</button>
                            <button type='button' onClick={(e) => cancel()}>Отменить</button>
                            <ImageInput onChange={e => console.log(e)} allowClear={true} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const CreateDishReduxForm = reduxForm({form: 'create-dish'})(CreateDish);
export default CreateDishReduxForm;