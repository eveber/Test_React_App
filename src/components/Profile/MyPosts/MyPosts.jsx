import React from 'react';
import css from './MyPosts.module.scss';
import Post from '../MyPosts/Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {ValidateFormControl} from "../../common/FormsControls/FormsControls";

let maxLength1000 = maxLengthCreator (1000);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={css.txtAreaWrapp}>
            <Field className={css.siteTextarea}
                   name='postText'
                   component={ValidateFormControl}
                   validateTag='textarea'
                   placeholder="Type your news here.."
                   validate={[required, maxLength1000]}
            />
            <div className={css.btnSendWrapp}>
                <button className={css.siteButton}>Send</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'addPost'})(AddPostForm);

const MyPosts = (props) => {

    let addNewPost = (formData) => {
        props.addPost(formData.postText);
    }

    let post = props.posts.map((p) => <Post id={p.id} message={p.postMessage} likes={p.likeCount} key={p.id}/>);

    return (
        <div className={css.postsWrapper}>
            <label>My posts</label>
            <AddPostFormRedux onSubmit={addNewPost}/>
            {post}
        </div>
    );
};

export default MyPosts;