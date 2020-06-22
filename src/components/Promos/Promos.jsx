import React from 'react'
import {Button} from "react-bootstrap";

const Promos = ({promos, newPromo}) => {
    return (
        <div>
            <div className='page-header -action'>
                <div className='page-header-title'>Акции</div>
                <div className='page-header-action'>
                    <Button variant='primary' onClick={newPromo}>Добавить акцию</Button>
                </div>
            </div>
            <div className='page-container'>
                <div>
                    {promos.length && <div dangerouslySetInnerHTML={{__html: promos[0].description}} />}
                </div>
            </div>
        </div>
    )
}

export default Promos;