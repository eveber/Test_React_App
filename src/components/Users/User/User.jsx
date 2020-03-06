import React from "react";
import * as axios from "axios";
import noAvatar from '../../../Assets/images/no_avatar.png';
import css from './User.module.scss';

class User extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            let users = response.data.items;
            this.props.setUsers(users);
        });
    }

    onCurrentPageClick = (page) => {
        this.props.setCurrentPage(page);
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        console.log(this.props.currentPage);
        return (
            <div>
                <div className={css.pagination}>
                    {pages.map((p) => {
                     return <button onClick={()=> this.onCurrentPageClick(p)} className={this.props.currentPage === p
                         ? css.siteButton + ' ' + css.selectedPage
                         : css.siteButton}>
                         {p}
                     </button>

                    })}
                </div>

                {
                    this.props.users.map((u) => <div className={css.userItem} key={u.id}>
                        <div className={css.avatarWrapp}>
                            <div className={css.photoWrapp}>
                                <img src={u.photos != null ? noAvatar : u.photos.small} alt="avatar"/>
                            </div>

                            <div className={css.btnWrap}>
                                {
                                    u.follow
                                        ? <button className={css.siteButton} onClick={() => {
                                            this.props.userUnfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button className={css.siteButton} onClick={() => {
                                            this.props.userFollow(u.id)
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

}


export default User;