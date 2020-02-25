//Action types consts
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA_POST = 'UPDATE-TEXT-AREA-POST';

let profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 5,
                postMessage: state.newPostText,
                likeCount: 0
            };
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_TEXT_AREA_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

//Action Creators
export let addPostActionCreator = () => ({type: ADD_POST});
export let updateTextAreaPostActionCreator = (post) => ({type:UPDATE_TEXT_AREA_POST, newText: post});

export default profileReducer;