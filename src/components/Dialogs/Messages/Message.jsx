import React from 'react';
import m from './Message.module.scss';
import messageAvatar from '../../images/post_avatar.jpg';

const Message = (props) => {
    return (
        <div className={m.messages}>
            <div className={m.message}>
                <img src={messageAvatar} alt=""/>
                <p className={m.figure}>Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit.
                    Dolor molestias necessitatibus neque quis
                    reiciendis rerum sunt! Aspernatur cum magni
                    praesentium?</p>
            </div>
            <div className={m.message}>
                <img src={messageAvatar} alt=""/>
                <p className={m.figure}>Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit.
                    Dolor sunt! </p>
            </div>
        </div>
    );
}

export default Message;