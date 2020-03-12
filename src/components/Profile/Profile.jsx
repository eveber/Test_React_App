import React from 'react';
import css from './Profile.module.scss';
import PageCover from './Header/PageCover';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={css.ProfileWrapper}>
            <PageCover userProfile={props.userProfile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;