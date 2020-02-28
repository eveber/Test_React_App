import React from 'react';
import css from './Friend.module.scss';
import avatar from '../../images/post_avatar.jpg';

const Friend = (props) => {

    return (
        <div className={css.friendWrapper}>
            <img src={avatar} alt=""/>
            <p>
                <a href="#" className={css.siteLink}>
                    {props.name}
                </a>
            </p>
        </div>
    );
}

export default Friend;