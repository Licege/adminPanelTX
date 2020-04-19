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
                Тут акции
                <div>
                    <div>{'<p>пап</p>'}</div>
                </div>
            </div>
        </div>
    )
}

export default Promos;