import React from "react";
import css from './Users.module.scss';
import User from "./User/User";


const Users = (props) => {

    return (
        <div>
            <label className={css.siteCaption}>Пользователи</label>
            <div className={css.usersWrapper}>
                <User {...props} />
            </div>
        </div>

    )
};

export default Users;