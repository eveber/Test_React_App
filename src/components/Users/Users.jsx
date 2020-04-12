import React from "react";
import css from './Users.module.scss';
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {

    return (
        <div>
            <label className={css.siteCaption}>Пользователи</label>
            <div className={css.usersWrapper}>
                <Paginator {...props} totalItemsCount = {props.totalUsersCount} />
                {props.users.map((u) => <User {...props} user={u} key={u.id} />)}
            </div>
        </div>

    )
};

export default Users;