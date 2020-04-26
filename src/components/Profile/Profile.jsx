import React from 'react';
import css from './Profile.module.scss';
import PageCover from './Header/PageCover';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {

    if(!props.userProfile) {
        return <Preloader/>
    }

    return (
        <div className={css.ProfileWrapper}>
            <PageCover {...props}
                       isOwner={props.isOwner}
                       //saveAvatar={props.saveAvatar}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;