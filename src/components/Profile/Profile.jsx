import React from 'react';
import css from './Profile.module.scss';
import PageCover from './Header/PageCover';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={css.ProfileWrapper}>
            <PageCover name='Evgenii Veber' birth='22th March' city='Khmelnitskiy' education='TUP'
                       site='www.this.com' />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;