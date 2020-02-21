import React from 'react';
import css from './Friendsbar.module.scss';
import Friend from "./Friends/Friend";

const Friendsbar = (props) => {

    let friend = props.friendsBar.friends.map((f)=><Friend id={f.id} name={f.friendName} /> )

    return (
        <div className={css.friendsbar}>
            <div className={css.caption}>Друзья</div>
            {friend}
        </div>
    );
}

export default Friendsbar;