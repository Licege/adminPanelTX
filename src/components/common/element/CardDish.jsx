import React from 'react';
import altImg from '../../../static/img/dish.svg';

let CardDish = ({card, img, change, remove}) => {
    return (
        <div className='card card_vacancy'>
            <div className='card-body'>
                <img className='card_vacancy-img' src={img === {} ? img : altImg} alt={card.title}/>
                <h3 className='card_vacancy-title'>{card.title}</h3>
                {card.description && <p><b>Описание:</b> {card.description}</p>}
                {card.weight && <p><b>Вес:</b> {card.weight + ' г.'}</p>}
                {card.price && <p><b>Цена:</b> {card.price + ' ₽'} </p>}
                {card.category_id && <p>Категория: {card.category_id}</p>}
                <button className='btn btn-primary mb-2' onClick={(e) => change(card.id)}>Изменить</button>
                <button className='btn btn-danger' onClick={(e) => remove(card.id)}>Удалить</button>
            </div>
        </div>
    )
};

export default CardDish;