import React from 'react';
import m from './Profile.module.scss';
import PageCover from './Header/PageCover';
import AvaDescription from './Avatar/AvaDescription';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={m.ProfileWrapper}>
            <PageCover />            
            <AvaDescription name='Evgenii Veber' birth='22th March' city='Khmelnitskiy' education='TUP' site='www.this.com' />
            <MyPosts />
        </div>
    );
}

export default Profile;