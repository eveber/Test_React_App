import React from 'react';
import css from './Profile.module.scss';
import PageCover from './Header/PageCover';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateUserStatus} from "../../redux/profile-reducer";

const Profile = (props) => {

    return (
        <div className={css.ProfileWrapper}>
            <PageCover {...props} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;