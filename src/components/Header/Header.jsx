import React from 'react';
import Classes from './Header.module.scss';
import logo from '../../static/img/logo.ico';

const Header = () => {
    return(
        <header className={Classes.header}>
            <img className={Classes.logo} src={logo} alt="logo"/>
        </header>
    )
};

export default Header;