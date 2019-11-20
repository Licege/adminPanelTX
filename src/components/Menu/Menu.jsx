import React from 'react';

import styles from '../assets/styles/styles';

const Menu = () => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header-title'>
                    Меню
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <input type='file' accept="image/png, image/jpeg, image/svg+xml, image/svg"/>
                    </div>
                </div>
                Скоро будет меню...
            </div>
        </div>
    )
};

export default Menu;