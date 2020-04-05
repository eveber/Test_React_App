import React from 'react';
import css from './Header.module.scss';
import logo from '../../Assets/images/logo.png';
import {NavLink, Redirect} from "react-router-dom";


const Header = (props) => {

    return (
        <header className={css.header}>
            <img className={css.logo} src={logo} alt=""/>
            <div className={css.userLoginWrapper}>
                {
                    props.isAuth
                    ? <div>
                        <div>
                            <span>{'пользователь: ' + props.userFullName}</span>
                        </div>
                        <div>
                            <button className={css.siteButton} onClick={props.logout}>Выход</button>
                        </div>
                    </div>
                    : <NavLink to={'/login'} className={css.siteLink}>
                        Вход
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;