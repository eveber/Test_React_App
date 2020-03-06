import React from "react";
import css from './Users.module.scss';
import User from "./User/User";


const Users = (props) => {

    return (
        <div>
            <label className={css.siteCaption}>Пользователи</label>
            <div className={css.usersWrapper}>
                <User users={props.users}
                      setUsers={props.setUsers}
                      userFollow={props.userFollow}
                      userUnfollow={props.userUnfollow}
                      pageSize={props.pageSize}
                      totalUsersCount={props.totalUsersCount}
                      currentPage={props.currentPage}
                      setCurrentPage={props.setCurrentPage} />
            </div>
        </div>

    )
};

export default Users;