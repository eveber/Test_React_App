import React from 'react';
import css from './MyPosts.module.scss';
import Post from '../MyPosts/Post/Post'

const MyPosts = (props) => {

    let onAddPost = ()=> {
        props.onAddPost();
    }

    let onPostChange = (e) => {
        let postText = e.target.value;
        props.onPostChange(postText);
    }

    let post = props.posts.map((p) => <Post id={p.id} message={p.postMessage} likes={p.likeCount} />);

    return (
        <div className={css.postsWrapper}>
            <label>My posts</label>
            <div className={css.txtAreaWrapp}>
                <textarea className={css.siteTextarea}
                          value={props.newPostText}
                          placeholder="Type your news here.."
                          onChange={onPostChange} />
                <div className={css.btnSendWrapp}>
                    <button className={css.siteButton} onClick={onAddPost}>Send</button>
                </div>
            </div>
            {post}
        </div>
    );
};

export default MyPosts;