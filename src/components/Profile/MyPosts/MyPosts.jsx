import React from 'react';
import m from './MyPosts.module.scss';
import Post from '../MyPosts/Post/Post'

const MyPosts = () => {
    return (
        <div className={m.postsWrapper}>
            <label>My posts</label>
            <div className={m.txtAreaWrapp}>
                <textarea placeholder="Type your news here.."></textarea>
                <div className={m.btnSendWrapp}>
                    <button>Send</button>
                </div>
            </div>
            <Post message="Hey! Anybody here?" />
            <Post message="Nope, no one here!" />
            <Post message="Ok, then fuck no one!" />
        </div>
    );
}

export default MyPosts;