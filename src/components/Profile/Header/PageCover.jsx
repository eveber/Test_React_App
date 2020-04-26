import React, {useState} from 'react';
import css from './PageCover.module.scss';
import profileCoverImg from '../../../Assets/images/city_profile.png';
import noAvatar from '../../../Assets/images/no_avatar.png';
import ProfileDataFormRedux from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import {updateProfileSuccess} from "../../../redux/profile-reducer";

const PageCover = (props) => {
//console.log(props);
    let [editMode, setEditMode] = useState(false);

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            let avatarFile = e.target.files[0];
            props.saveAvatar(avatarFile);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData) //Thunk return promise
            .then(() => {
                setEditMode(false);
            });
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
                        {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                    </div>
                </div>

                {
                    editMode
                        ? <ProfileDataFormRedux onSubmit={onSubmit}
                                                initialValues={props.userProfile}
                                                goToEditMode={setEditMode}
                                                {...props}
                        />
                        : <ProfileData {...props} goToEditMode={setEditMode}/>
                }

            </div>
        </div>
    );
}

export default PageCover;