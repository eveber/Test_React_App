import React from 'react';
import css from './PageCover.module.scss';
import profileCoverImg from '../../../Assets/images/city_profile.png';
import Preloader from "../../common/Preloader/Preloader";
import noAvatar from '../../../Assets/images/no_avatar.png';
import ProfileStatus from './ProfileStatus';

const PageCover = (props) => {

    let onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            let avatarFile = e.target.files[0];
            props.saveAvatar(avatarFile);
        }
    }

    return (
        <div className={css.coverWrapper}>
            <div className={css.mainImage}>
                <img src={profileCoverImg} alt=""/>
            </div>

            <div className={css.avatarWrapper}>
                <div className={css.avatar}>
                    <img alt="" src={props.userProfile.photos.large || noAvatar}/>
                    <div className={css.uploadPhotoWrapper}>
                        {!props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                    </div>
                </div>

                <div className={css.description}>
                    <div className={css.name}>{props.userProfile.fullName}</div>
                    <ProfileStatus {...props} />
                    <div className={css.lockingForJob}>Поиск работы: {props.userProfile.lookingForAJob
                        ? 'в поиске' : 'не интересует'};</div>
                    <div className={css.lookingForAJobDescription}>Интересующая работа: {props.userProfile.lookingForAJobDescription};</div>
                    <div className={css.about}>Обо мне: {props.userProfile.aboutMe};</div>
                    <div className={css.contacts}>Сайт: {props.userProfile.contacts.website}</div>
                    <div className={css.contacts}>Сайт: {props.userProfile.contacts.vk}</div>
                    <div className={css.contacts}>Сайт: {props.userProfile.contacts.twitter}</div>
                    <div className={css.contacts}>Сайт: {props.userProfile.contacts.facebook}</div>
                </div>
            </div>
        </div>
    );
}

export default PageCover;