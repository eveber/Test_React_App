import React from 'react';
import css from './AvaDescription.module.scss';
import noAvaImg from '../../images/no_avatar.png';

const AvaDescription = (props) => {
    return (
        <div className={css.avatarWrapper}>
            <div className={css.avatar}>
                <img alt="" src={noAvaImg} />
            </div>

            <div className={css.description}>
                <div className={css.name}>{props.name}</div>
                <div className={css.birth}>Day of Birth: {props.birth}</div>
                <div className={css.city}>City: {props.city}</div>
                <div className={css.education}>Education: {props.education}</div>
                <div className={css.site}>Website: {props.site}</div>
            </div>
        </div>
    );
}

export default AvaDescription;