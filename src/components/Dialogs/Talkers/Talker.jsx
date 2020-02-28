import React from 'react';
import css from './Talker.module.scss';
import {NavLink} from "react-router-dom";

const Talker = (props) => {

    let talkerName = props.name;
    let path = '/dialogs/' + props.linkId;

    return (
        <div className={css.talker}>
            <NavLink to={path} className={css.siteLink} activeClassName={css.siteLinkActive}>
                {talkerName}
            </NavLink>
        </div>
    );
};

export default Talker;