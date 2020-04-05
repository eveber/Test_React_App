//Action types consts
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hey! Anybody here?', likeCount: 10},
        {id: 2, postMessage: 'Nope, no one here!', likeCount: 4},
        {id: 3, postMessage: 'Ok, then fuck no one!', likeCount: 65}],

    userProfile: null,
    userStatus: ''
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 5,
                postMessage: action.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, post]
            };

        case SET_USER_PROFILE:

            return {
                ...state,
                userProfile: action.userProfile
            };
        case SET_USER_STATUS:

            return {
                ...state,
                userStatus: action.userStatus
            };

        default:
            return state;
    }
}

//Action Creators
export let addPost = (newPostText) => ({type: ADD_POST, newPostText});
export let setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export let setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});

//Thunk creators
export const getUserProfile = (userId) => {
    //thunk body
    return (dispatch) => {
        profileAPI.getProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getUserStatus = (userId) => {
    //thunk body
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then((data) => {
            dispatch(setUserStatus(data));
        });
    }
}

export const updateUserStatus = (userStatus) => {
    //thunk body
    return (dispatch) => {
        profileAPI.updateUserStatus(userStatus).then((response) => {
            if(response.resultCode === 0) {
                dispatch(setUserStatus(userStatus));
            }
        });
    }
}

export default profileReducer;