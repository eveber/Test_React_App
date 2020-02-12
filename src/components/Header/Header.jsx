import React from 'react';
import m from './Header.module.scss';
import logo from '../images/logo.png';


const Header = () => {
    return (
        <header className={m.header}>
            <img className={m.logo} src={logo} alt="" />
        </header>
    );
}

export default Header;