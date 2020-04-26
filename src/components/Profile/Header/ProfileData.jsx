import css from "./PageCover.module.scss";
import ProfileStatus from "./ProfileStatus";
import React from "react";
import ProfileContacts from "./ProfileContacts";

let ProfileData = (props) => {
    return (
        <div className={css.description}>
            <div className={css.name}>{props.userProfile.fullName}
                {props.isOwner && <button onClick={() => {props.goToEditMode(true)}}>Редактировать профиль</button>}
            </div>

            <ProfileStatus {...props} />

            <div className={css.loockingForJob}><b>Поиск работы</b>: {props.userProfile.lookingForAJob
                ? 'в поиске' : 'не интересует'}
            </div>
            {
                props.userProfile.lookingForAJob
                    ? <div className={css.lookingForAJobDescription}>
                        <b>Интересующая работа</b>: {props.userProfile.lookingForAJobDescription}</div>
                    : null
            }
            <div><b>Обо мне</b>: {props.userProfile.aboutMe}</div>
            {
                Object.keys(props.userProfile.contacts).map(key => {
                    return <ProfileContacts key={key}
                                            contactTitle={key}
                                            contactValue={props.userProfile.contacts[key]}/>
                })
            }
        </div>
    )
}
export default ProfileData;