import React from 'react'
import { CardPromo } from '../common/element/CardPromo'
import { Button } from 'react-bootstrap'

const Promos = ( { promos, newPromo } ) => {
    return (
        <div>
            <div className='page-header -action'>
                <div className='page-header-title'>Акции</div>
                <div className='page-header-action'>
                    <Button variant='primary' onClick={newPromo}>Добавить новую акцию</Button>
                </div>
            </div>
            <div className='promos'>
                <div className='promos-wrapper'>
                    {promos.map(promo => <CardPromo promo={promo} key={promo._id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Promos
