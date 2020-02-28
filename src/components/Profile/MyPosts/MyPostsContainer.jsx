import React from 'react';
import {addPostActionCreator, updateTextAreaPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (postText) => {dispatch(updateTextAreaPostActionCreator(postText))},
        onAddPost: () => {dispatch(addPostActionCreator())}
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;