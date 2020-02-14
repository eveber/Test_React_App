import React from 'react';
import m from './Talker.module.scss';
import {NavLink} from "react-router-dom";

const Talker = (props) => {

    return (
        <div className={m.talkers}>
            <div className={m.talker}>
                <NavLink to='/dialogs/1' className={m.siteLink} activeClassName={m.siteLinkActive}>
                    Петя Васечкин
                </NavLink>
            </div>
            <div className={m.talker}>
                <NavLink to='/dialogs/2' className={m.siteLink}  activeClassName={m.siteLinkActive}>
                    Тимченко Николай Николаевич
                </NavLink>
            </div>
            <div className={m.talker}>
                <NavLink to='/dialogs/3' className={m.siteLink}  activeClassName={m.siteLinkActive}>
                    Васян Гаврилов
                </NavLink>
            </div>
            <div className={m.talker}>
                <NavLink to='/dialogs/4' className={m.siteLink}  activeClassName={m.siteLinkActive}>
                    Степанида Экслендер
                </NavLink>
            </div>
            <div className={m.talker}>
                <NavLink to='/dialogs/5' className={m.siteLink} activeClassName={m.siteLinkActive}>
                    Анатолий Галкин
                </NavLink>
            </div>
        </div>
    );
};

export default Talker;