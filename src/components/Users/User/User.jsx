import React from "react";
import noAvatar from '../../../Assets/images/no_avatar.png';
import css from './User.module.scss';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import Preloader from "../../common/Preloader/Preloader";
import {follow, unFollow} from "../../../api/api";

const User = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
//debugger;
    return (
        <div>
            {props.isFetching ? <Preloader /> : null}
            <div className={css.pagination}>
                {pages.map((p) => {
                    return <span onClick={() => props.onCurrentPageClick(p)}
                                 className={props.currentPage === p && css.selectedPage}>
                         {p}
                     </span>

                })}
            </div>

            {
                props.users.map((u) => <div className={css.userItem} key={u.id}>
                    <div className={css.avatarWrapp}>
                        <div className={css.photoWrapp}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : noAvatar} alt="avatar"/>
                            </NavLink>
                        </div>

                        <div className={css.btnWrap}>
                            {
                                u.follow
                                    ? <button className={css.siteButton} onClick={() => {
                                        props.toggleIsFetching (true); //For Preloader!!!
                                        unFollow(u.id).then((data) => {
                                                if(data.resultCode === 0) {
                                                    props.userUnfollow(u.id)
                                                }
                                                props.toggleIsFetching (false); //For Preloader!!!
                                            })
                                    }}>Unfollow</button>
                                    : <button className={css.siteButton} onClick={() => {
                                        props.toggleIsFetching (true); //For Preloader!!!
                                            follow(u.id).then((data) => {
                                                if(data.resultCode === 0) {
                                                    props.userFollow(u.id)
                                                }
                                                props.toggleIsFetching (false); //For Preloader!!!
                                            })
                                    }}>Follow</button>
                            }
                        </div>
                    </div>

                    <div className={css.userInfoWrapp}>
                        <div>
                            <div className={css.userName + ' ' + css.siteCaption}>{u.name}</div>
                            <div className={css.userCountry + ' ' + css.siteCaption}>Country,</div>
                        </div>
                        <div className={css.userCity + ' ' + css.siteCaption}>City</div>
                        <div className={css.userStatus}>Status...</div>
                    </div>

                </div>)
            }
        </div>
    )
}


export default User;