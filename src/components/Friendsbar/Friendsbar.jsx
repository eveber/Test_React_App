import React from 'react';
import css from './Friendsbar.module.scss';
import Friend from "./Friends/Friend";

const Friendsbar = (props) => {

    let friend = props.friends.map((f)=><Friend id={f.id} name={f.friendName} key={f.id} /> )

    return (
        <div className={css.friendsbar}>
            <div className={css.caption}>Друзья</div>
            {friend}
        </div>
    );
}

export default Friendsbar;