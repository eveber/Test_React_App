import React from 'react';
import css from './Message.module.scss';
import messageAvatar from '../../images/post_avatar.jpg';

const Message = (props) => {
    let message = props.message;

    return (
        <div className={css.message}>
            <img src={messageAvatar} alt="" />
            <p className={css.figure}>
                {message}
            </p>
        </div>
    );
}

export default Message;