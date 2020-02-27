//Action types consts
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA_POST = 'UPDATE-TEXT-AREA-POST';

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hey! Anybody here?', likeCount: 10},
        {id: 2, postMessage: 'Nope, no one here!', likeCount: 4},
        {id: 3, postMessage: 'Ok, then fuck no one!', likeCount: 65}],

    newPostText: ''
};

let profileReducer = (state = initialState, action) => {
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
export let updateTextAreaPostActionCreator = (post) => ({type: UPDATE_TEXT_AREA_POST, newText: post});

export default profileReducer;