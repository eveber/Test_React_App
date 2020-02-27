import React from 'react';
import {addPostActionCreator, updateTextAreaPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                let onAddPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (postText) => {
                    store.dispatch(updateTextAreaPostActionCreator(postText));
                }

                return <MyPosts posts={state.profilePage.posts}
                                onAddPost={onAddPost}
                                onPostChange={onPostChange}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
    </StoreContext.Consumer>
};

export default MyPostsContainer;