import React from 'react';
import css from './MyPosts.module.scss';
import Post from '../MyPosts/Post/Post'

const MyPosts = (props) => {

    let post = props.posts.map((p) => <Post id={p.id} message={p.postMessage} likes={p.likeCount} />);

    return (
        <div className={css.postsWrapper}>
            <label>My posts</label>
            <div className={css.txtAreaWrapp}>
                <textarea className={css.siteTextarea} placeholder="Type your news here.."></textarea>
                <div className={css.btnSendWrapp}>
                    <button className={css.siteButton}>Send</button>
                </div>
            </div>
            {post}
        </div>
    );
};

export default MyPosts;