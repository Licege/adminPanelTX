import React from 'react'
import { CardPromo } from '../common/element/CardPromo'
import { Button } from 'react-bootstrap'
import {PageHeader} from '../../styledComponents/components'

const Promos = ({ promos, newPromo }) => {
    return (
        <div>
          <PageHeader title='Акции'>
            <Button variant='primary' onClick={newPromo}>Добавить новую акцию</Button>
          </PageHeader>
            <div className='promos'>
                <div className='promos-wrapper'>
                    {promos.map(promo => <CardPromo promo={promo} key={promo.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Promos
