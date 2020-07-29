import React from 'react'
import altImg from '../../../static/img/dish.svg'
import { cropText, fullLink } from '../../../plugins/helpers'
import { Link } from 'react-router-dom'

export const CardPromo = ( { promo } ) => {
    const style = {
        backgroundImage: `url(${promo.imageSrc ? fullLink(promo.imageSrc) : altImg})`,
        backgroundSize: 'cover',
    }

    return (
        <div className='card card_promo'>
            <div className='card_promo-img' style={style}/>
            <div className='card-body card_promo__wrapper'>
                <div className='card_promo-title'>{promo.title}</div>
                <div className='card_promo-description'>{cropText(promo.short_description, 60)}</div>
                <div className='card_promo-actions'>
                    <Link to={`/promos/edit/${promo._id}`}>Изменить</Link>
                </div>
            </div>
        </div>
    )
}
