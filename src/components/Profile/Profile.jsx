import React from 'react';
import css from './Profile.module.scss';
import PageCover from './Header/PageCover';
import AvaDescription from './Avatar/AvaDescription';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div className={css.ProfileWrapper}>
            <PageCover />            
            <AvaDescription name='Evgenii Veber' birth='22th March' city='Khmelnitskiy' education='TUP' site='www.this.com' />
            <MyPosts posts={props.state.posts} />
        </div>
    );
}

export default Profile;