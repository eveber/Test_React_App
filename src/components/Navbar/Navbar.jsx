import React from 'react';
import m from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={m.nav}>
            <div className={m.item}>
                <NavLink to='profile' activeClassName={m.active}>Профиль</NavLink>
            </div>
            <div className={m.item}>
                <NavLink to='dialogs' activeClassName={m.active}>Сообщения</NavLink>
            </div>
            <div className={m.item}>
                <NavLink to='news' activeClassName={m.active}>Новости</NavLink>
            </div>
            <div className={m.item}>
                <NavLink to='music' activeClassName={m.active}>Музыка</NavLink>
            </div>
            <div className={m.item}>
                <NavLink to='settings' activeClassName={m.active}>Настройки</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;