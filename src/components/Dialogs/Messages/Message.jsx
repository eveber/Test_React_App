import React from 'react';
import m from './Message.module.scss';
import messageAvatar from '../../images/post_avatar.jpg';

const Message = (props) => {
    let message = props.message;

    return (
        <div className={m.message}>
            <img src={messageAvatar} alt="" />
            <p className={m.figure}>
                {message}
            </p>
        </div>
    );
}

export default Message;