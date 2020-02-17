import React from 'react';
import m from './MyPosts.module.scss';
import Post from '../MyPosts/Post/Post'

const MyPosts = () => {

    let postsData = [
        {id: 1, postMessage: 'Hey! Anybody here?', likeCount: 10},
        {id: 1, postMessage: 'Nope, no one here!', likeCount: 4},
        {id: 1, postMessage: 'Ok, then fuck no one!', likeCount: 65}
    ];

    return (
        <div className={m.postsWrapper}>
            <label>My posts</label>
            <div className={m.txtAreaWrapp}>
                <textarea className={m.siteTextarea} placeholder="Type your news here.."></textarea>
                <div className={m.btnSendWrapp}>
                    <button className={m.siteButton}>Send</button>
                </div>
            </div>
            <Post id={postsData[0].id} message={postsData[0].postMessage} likes={postsData[0].likeCount} />
            <Post id={postsData[1].id} message={postsData[1].postMessage} likes={postsData[1].likeCount} />
            <Post id={postsData[2].id} message={postsData[2].postMessage} likes={postsData[2].likeCount} />
        </div>
    );
};

export default MyPosts;