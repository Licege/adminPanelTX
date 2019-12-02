import React from 'react';
import Question from "./elements/question";
import Promo from "./Promo";

const Promos = ({promos}) => {
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
                    promos.map(promo => {
                        return <Promo promo={promo} />
                    })
                }
            </div>
        </>
    )
};

export default Promos;