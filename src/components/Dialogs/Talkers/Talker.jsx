import React from 'react';
import m from './Talker.module.scss';
import {NavLink} from "react-router-dom";

const Talker = (props) => {

    let talkerName = props.name;
    let path = '/dialogs/' + props.linkId;

    return (
        <div className={m.talker}>
            <NavLink to={path} className={m.siteLink} activeClassName={m.siteLinkActive}>
                {talkerName}
            </NavLink>
        </div>
    );
};

export default Talker;