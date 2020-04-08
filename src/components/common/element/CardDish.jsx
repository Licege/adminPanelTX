import React from 'react';
import altImg from '../../../static/img/dish.svg';
import {cropText, getTitleById} from "../../../plagins/helpers";

let CardDish = ({dish, categories, change, remove}) => {
    const style = {
        backgroundImage: `url(${dish.file.id !== 0 ? dish.file.url : altImg})`,
        backgroundSize: "cover"
    }

    return (
        <div className='card card_vacancy'>
            <div className='card_vacancy-img' style={style} />
            <div className='card-body'>
                <h3 className='card_vacancy-title'>{dish.title}</h3>
                {dish.description && <p><b>Описание:</b> {cropText(dish.description, 70)} </p>}
                {dish.weight && <p><b>Вес:</b> {dish.weight + ' г.'} </p>}
                {dish.price && <p><b>Цена:</b> {dish.price + ' ₽'} </p>}
                {dish.category_id && categories.length && <p>Категория: {getTitleById(categories, dish.category_id)}</p>}
                <div className='card_vacancy-button'>
                    <button className='btn btn-primary mr-2' onClick={(e) => change(dish.id)}>Изменить</button>
                    <button className='btn btn-danger' onClick={(e) => remove(dish.id)}>Удалить</button>
                </div>
            </div>
        </div>
    )
};

export default CardDish;