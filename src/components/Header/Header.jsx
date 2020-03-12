import React from 'react';
import css from './Header.module.scss';
import logo from '../../Assets/images/logo.png';
import {NavLink} from "react-router-dom";




const Header = (props) => {
    //debugger;
    //alert(props.userId);
    return (
        <header className={css.header}>
            <img className={css.logo} src={logo} alt="" />
            <div className={css.userLoginWrapper}>
                {props.isAuth
                    ? 'пользователь: ' + props.userFullName
                    : <NavLink to={'/login'} className={css.siteLink}>
                        Войти
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;