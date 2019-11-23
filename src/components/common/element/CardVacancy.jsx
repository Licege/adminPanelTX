import React from 'react';
import altImg from '../../../static/img/vacancy.png'

let CardVacancy = ({card, img}) => {
    return (
        <div className='card card_vacancy'>
            <div className='card-body'>
                <img className='card_vacancy-img' src={img === {} ? img : altImg} alt={card.title}/>
                <h3 className='card_vacancy-title'>{card.title ? card.title : 'Вакансия'}</h3>
                {card.requirements && <p><b>Требования:</b> {card.requirements}</p>}
                {card.description && <p><b>Описание:</b> {card.description}</p>}
                {card.salary_from && card.salary_to
                    ? <p>Заработная плата от {card.salary_from} до {card.salary_to} ₽</p>
                    : card.salary_from || card.salary_to
                        ? <p>Заработная плата: {card.salary_from || card.salary_to} ₽</p> : ''}
                <button className='btn btn-primary'>Изменить</button>
            </div>
        </div>
    )
};

export default CardVacancy;