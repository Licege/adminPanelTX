import React from 'react';
import Question from "./elements/question";
import Promo from "./Promo";

const Promos = (props) => {
    return (
        <>
            <div className='page-header'>
                <div className='page-header-title'>
                    Все акции
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <h5>Информация об акции</h5>
                        <h5>Условия акции</h5>
                    </div>
                </div>
                {
                    props.promos.map((promo, key) => {
                        return <Promo promo={promo} addAnswer={props.addAnswer} key={key} />
                    })
                }
            </div>
        </>
    )
};

export default Promos;