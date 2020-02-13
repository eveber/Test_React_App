import React from 'react';
import m from './Post.module.scss';
import postAva from '../../../images/post_avatar.jpg'

const Post = (props) => {
    return (
        <div className={m.postWrapp}>
            <div className={m.item}>
                <img alt="" src={postAva} />
                <div className={m.postText}>{props.message}</div>
            </div>
        </div>
    );
}

export default Post;