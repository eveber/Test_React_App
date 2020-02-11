import React from 'react';
import m from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={m.profileWrapper}>
            <div className={m.mainImage}>
                <img src='https://sx-content-labs.sixt.io/Media/sf-countries/USA/Chicago/chicago-city-header.jpg' />
            </div>
            
            <div className={m.avatarWrapper}>
                <div className={m.avatar}>
                    <img src="https://i.pinimg.com/originals/50/05/f5/5005f514424141acf70727360add163d.png" />
                </div>
                <div className={m.description}>
                    <div className={m.name}>Evgenii Veber</div>
                    <div className={m.birth}>Day of Birth: 22th March</div>
                    <div className={m.city}>City: Khmelnitskiy</div>
                    <div className={m.education}>Education: TUP</div>
                    <div className={m.site}>Website: www.this.com</div>
                </div>
            </div>
            
            <div className={m.postsWrapper}>
                <label>My posts</label>
                <div className={m.txtAreaWrapp}>
                    <textarea placeholder="Type your news here.."></textarea>
                    <div className={m.btnSendWrapp}>
                        <button>Send</button>
                    </div>
                </div>
                
                <div className={m.postWrapp}>
                    <div className={m.item}>
                        <div className={m.postCircle}></div>
                        <div className={m.postText}>Anybody here?</div>
                    </div>

                    <div className={m.item}>
                        <div className={m.postCircle}></div>
                        <div className={m.postText}>Nope! No one here!</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

console.log(m);

export default Profile;