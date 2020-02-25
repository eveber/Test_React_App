import React from 'react';
import css from './MyPosts.module.scss';
import Post from '../MyPosts/Post/Post'
import {addPostActionCreator, updateTextAreaPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    //let textAreaElem = React.createRef();

    let addPost = ()=> {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let postText = e.target.value;
        props.dispatch(updateTextAreaPostActionCreator(postText));
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
                    <button className={css.siteButton} onClick={addPost}>Send</button>
                </div>
            </div>
            {post}
        </div>
    );
};

export default MyPosts;