import React from "react";
import noAvatar from '../../../Assets/images/no_avatar.png';
import css from './User.module.scss';
import {NavLink} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

const User = (props) => {
    if(props.isFetching) {
        return <Preloader/>
    }

    let user = props.user;
    return (
                 <div className={css.userItem}>
                    <div className={css.avatarWrapp}>
                        <div className={css.photoWrapp}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : noAvatar} alt="avatar"/>
                            </NavLink>
                        </div>

                        <div className={css.btnWrap}>
                            {
                                user.followed
                                    ? <button disabled={props.isFollowing.some((id) => id === user.id)}
                                              className={css.siteButton}
                                              onClick={() => {
                                        props.unfollow(user.id);
                                    }}>Unfollow</button>
                                    : <button disabled={props.isFollowing.some((id) => id === user.id)}
                                              className={css.siteButton}
                                              onClick={() => {
                                        props.follow(user.id);
                                    }}>Follow</button>
                            }
                        </div>
                    </div>

                    <div className={css.userInfoWrapp}>
                        <div>
                            <div className={css.userName + ' ' + css.siteCaption}>{user.name}</div>
                            <div className={css.userCountry + ' ' + css.siteCaption}>Country,</div>
                        </div>
                        <div className={css.userCity + ' ' + css.siteCaption}>City</div>
                        <div className={css.userStatus}>Status...</div>
                    </div>

                </div>
    )
}

export default User;