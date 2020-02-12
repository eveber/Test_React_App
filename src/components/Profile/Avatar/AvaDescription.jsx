import React from 'react';
import m from './AvaDescription.module.scss';
import noAvaImg from '../../images/no_avatar.png';

const AvaDescription = (props) => {
    return (
        <div className={m.avatarWrapper}>
            <div className={m.avatar}>
                <img alt="" src={noAvaImg} />
            </div>

            <div className={m.description}>
                <div className={m.name}>{props.name}</div>
                <div className={m.birth}>Day of Birth: {props.birth}</div>
                <div className={m.city}>City: {props.city}</div>
                <div className={m.education}>Education: {props.education}</div>
                <div className={m.site}>Website: {props.site}</div>
            </div>
        </div>
    );
}

export default AvaDescription;