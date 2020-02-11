import React from 'react';
import m from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={m.profileWrapper}>
            <div className={m.mainImage}>
                <img src='https://sx-content-labs.sixt.io/Media/sf-countries/USA/Chicago/chicago-city-header.jpg' />
            </div>
            
            <div>
                AVA + Description
            </div>
            
            <div>
                My posts
                <div>            
                    New Post
                </div>
            
                <div className={m.posts}>
                    <div className={m.item}>
                        Post1
                    </div>
                    <div className={m.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    );
}

console.log(m);

export default Profile;