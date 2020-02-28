import React from 'react';
import css from './Post.module.scss';
import postAva from '../../../images/post_avatar.jpg'

const Post = (props) => {
    return (
        <div className={css.postWrapp}>
            <div className={css.item}>
                <img alt="" src={postAva} />
                <div className={css.postText}>{props.message}</div>
                <div className={css.postLikes}>likes: {props.likes}</div>
            </div>
        </div>
    );
}

export default Post;