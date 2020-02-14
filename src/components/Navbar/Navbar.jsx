import React from 'react';
import m from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={m.nav}>
            <div className={m.item}>
                <NavLink to='/profile' className={m.siteLink} activeClassName={m.siteLinkActive}>
                    Профиль
                </NavLink>
            </div>
            <div className={m.item}>
                <NavLink to='/dialogs' className={m.siteLink} activeClassName={m.siteLinkActive}>
                    Сообщения
                </NavLink>
            </div>
            <div className={m.item}>
                <NavLink to='/news' className={m.siteLink} activeClassName={m.siteLinkActive}>
                    Новости
                </NavLink>
            </div>
            <div className={m.item}>
                <NavLink to='/music' className={m.siteLink} activeClassName={m.siteLinkActive}>
                    Музыка
                </NavLink>
            </div>
            <div className={m.item + ' ' + m.btnSettings}>
                <NavLink to='/settings' className={m.siteLink} activeClassName={m.siteLinkActive}>
                    Настройки
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;