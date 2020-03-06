import React from 'react';
import css from './PageCover.module.scss';
import profileCoverImg from '../../../Assets/images/city_profile.png';
import noAvaImg from "../../../Assets/images/no_avatar.png";

const PageCover = (props) => {
    return (
        <div className={css.coverWrapper}>
            <div className={css.mainImage}>
                <img src={profileCoverImg} alt=""/>
            </div>

            <div className={css.avatarWrapper}>
                <div className={css.avatar}>
                    <img alt="" src={noAvaImg}/>
                </div>

                <div className={css.description}>
                    <div className={css.name}>{props.name}</div>
                    <div className={css.birth}>Day of Birth: {props.birth}</div>
                    <div className={css.city}>City: {props.city}</div>
                    <div className={css.education}>Education: {props.education}</div>
                    <div className={css.site}>Website: {props.site}</div>
                </div>
            </div>

        </div>
    );
}

export default PageCover;