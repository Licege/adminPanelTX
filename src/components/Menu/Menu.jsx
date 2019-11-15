import React from 'react';

import styles from '../assets/styles/styles';

const Menu = () => {
    return (
        <div>
            <div style={styles.Header}>
                <div style={styles.HeaderTitle}>
                    Меню
                </div>
            </div>
            <div style={styles.Page}>
                <div style={styles.Card}>
                    <input type='file' accept="image/png, image/jpeg, image/svg+xml, image/svg"/>
                </div>
                Скоро будет меню...
            </div>
        </div>
    )
};

export default Menu;