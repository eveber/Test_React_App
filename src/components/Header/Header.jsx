import React from 'react';
import css from './Header.module.scss';
import logo from '../images/logo.png';


const Header = () => {
    return (
        <header className={css.header}>
            <img className={css.logo} src={logo} alt="" />
        </header>
    );
}

export default Header;