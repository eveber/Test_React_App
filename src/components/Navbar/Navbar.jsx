import React from 'react';
import css from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import Friendsbar from "../Friendsbar/Friendsbar";
import FriendsbarContainer from "../Friendsbar/Friends/FriendsbarContainer";



const Navbar = (props) => {

    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to='/profile' className={css.siteLink} activeClassName={css.siteLinkActive}>
                    Профиль
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/dialogs' className={css.siteLink} activeClassName={css.siteLinkActive}>
                    Сообщения
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/news' className={css.siteLink} activeClassName={css.siteLinkActive}>
                    Новости
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink to='/music' className={css.siteLink} activeClassName={css.siteLinkActive}>
                    Музыка
                </NavLink>
            </div>
            <div className={css.item + ' ' + css.btnSettings}>
                <NavLink to='/settings' className={css.siteLink} activeClassName={css.siteLinkActive}>
                    Настройки
                </NavLink>
            </div>

            <FriendsbarContainer />
        </nav>
    );
}

export default Navbar;