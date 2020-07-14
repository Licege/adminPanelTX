import React from 'react'
import {Button} from "react-bootstrap";
import {fullLink} from "../../plagins/helpers";
import altImg from "../../static/img/dish.svg";

export const Promo = ({promo, onChange, goBack}) => {
    const style = {
        backgroundImage: `url(${promo && promo.imageSrc ? fullLink(promo.imageSrc) : altImg})`,
        backgroundSize: "cover"
    }

    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>Редактирование акции{promo ? ': ' + promo.title : ''}</div>
            </div>
            {promo ? <div className='promo'>
                <div className='promo-img' style={style}/>
                <div className='promo__wrapper'>
                    <div className='promo__wrapper-content'>
                        <div className='promo-title'>{promo.title}</div>
                        <div className='promo-description' dangerouslySetInnerHTML={{__html: promo.description}}/>
                        <div>
                            <Button variant='secondary' onClick={goBack}>Все акции</Button>
                            <Button variant='link' onClick={onChange}>Изменить</Button>
                        </div>
                    </div>
                </div>
            </div> : null}
        </div>
    )
}
