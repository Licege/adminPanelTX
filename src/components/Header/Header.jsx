import React from 'react';
import logo from '../../static/img/logo.ico';
import {NavLink} from "react-router-dom";
import LogoutBtn from "../common/element/LogoutBtn";

const Header = () => {
    return(
        <header className='header'>
            <NavLink to='/'><img className='header-logo' src={logo} alt="logo"/></NavLink>
            <div className='header-logout'>
                <LogoutBtn/>
            </div>
        </header>
    )
};

export default Header;