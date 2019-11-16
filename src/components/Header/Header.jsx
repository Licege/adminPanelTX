import React from 'react';
import Classes from './Header.module.scss';
import logo from '../../static/img/logo.ico';
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <header className={Classes.header}>
            <NavLink to='/'><img className={Classes.logo} src={logo} alt="logo"/></NavLink>
        </header>
    )
};

export default Header;