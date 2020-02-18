import React from 'react';
import css from './PageCover.module.scss';
import profileCoverImg from '../../images/city_profile.png';

const PageCover = () => {
    return (
        <div className={css.mainImage}>
            <img src={profileCoverImg} alt="" />
        </div>
    );
}

export default PageCover;