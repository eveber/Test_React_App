import React from 'react';
import m from './PageCover.module.scss';
import profileCoverImg from '../../images/city_profile.png';

const PageCover = () => {
    return (
        <div className={m.mainImage}>
            <img src={profileCoverImg} alt="" />
        </div>
    );
}

export default PageCover;