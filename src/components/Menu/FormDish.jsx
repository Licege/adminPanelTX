import React from 'react';
import {createField, Input} from "../common/FormsControls";
import {Field, reduxForm} from "redux-form";
import ImageInput from "../common/imageInput";
import Button from "react-bootstrap/Button";

const FormDish = ({handleSubmit, categories, dish, cancel, postFile} ) => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    {dish ? dish.title : 'Добавление нового блюда'}
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
                                    <Field name="category_id" component="select" className="filter-main-input -name form-control" >
                                        <option />
                                        {categories && categories.map(p => {
                                            return <option value={p._id} key={p._id}>{p.title}</option>
                                        })}
                                    </Field>
                                </div>
                            </div>
                            <div>
                                {createField("Вес порции (г.)", "weight", [], Input)}
                            </div>

                            <div>
                                {createField("Цена", "cost", [], Input)}
                            </div>
                            <div>
                                <label htmlFor="is_delivery_dish">Доставка</label>
                                <Field name="is_delivery"
                                       id="is_delivery_dish"
                                       component="input"
                                       type="checkbox"
                                       className="filter-main-input -name form-control" />
                            </div>
                            <div>
                                <input type='file' onChange={postFile} />
                            </div>
                            <Button variant='primary' type='submit'>Сохранить</Button>
                            <Button variant='secondary' type='button' onClick={cancel}>Отменить</Button>
                            <ImageInput onChange={e => console.log(e)} allowClear={true} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const CreateDishReduxForm = reduxForm({form: 'create-dish', enableReinitialize: true})(FormDish);
export default CreateDishReduxForm;