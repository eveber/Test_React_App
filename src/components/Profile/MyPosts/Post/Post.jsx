import React from 'react';
import m from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={m.postWrapp}>
            <div className={m.item}>
                <img alt="" src="https://sun1-91.userapi.com/c847124/v847124728/335f4/thh2-8S3ZKM.jpg?ava=1" />
                <div className={m.postText}>{props.message}</div>
            </div>
        </div>
    );
}

export default Post;