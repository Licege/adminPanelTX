import React from 'react';
import Classes from './Menu.module.css';
import MenuBlock from '../common/element/menu/MenuBlock';

import styles from '../assets/styles/styles';

const Menu = () => {
    return (
        <div>
            <div style={styles.Header}>
                <div style={styles.HeaderTitle}>
                    Заголовок страницы
                </div>
            </div>
            <div style={styles.Page}>
                <div style={styles.Card}>1423</div>
                Скоро будет меню...
            </div>
        </div>
    )
};

export default Menu;