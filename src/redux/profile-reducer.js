//Action types consts
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA_POST = 'UPDATE-TEXT-AREA-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hey! Anybody here?', likeCount: 10},
        {id: 2, postMessage: 'Nope, no one here!', likeCount: 4},
        {id: 3, postMessage: 'Ok, then fuck no one!', likeCount: 65}],

    newPostText: '',
    userProfile: null
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 5,
                postMessage: state.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, post],
                newPostText: ''
            };
        case UPDATE_TEXT_AREA_POST:

            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:

            return {
                ...state,
                userProfile: action.userProfile
            };

        default:
            return state;
    }
}

//Action Creators
export let addPostActionCreator = () => ({type: ADD_POST});
export let updateTextAreaPostActionCreator = (post) => ({type: UPDATE_TEXT_AREA_POST, newText: post});
export let setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile: userProfile});

export default profileReducer;