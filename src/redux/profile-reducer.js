//Action types consts
import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hey! Anybody here?', likeCount: 10},
        {id: 2, postMessage: 'Nope, no one here!', likeCount: 4},
        {id: 3, postMessage: 'Ok, then fuck no one!', likeCount: 65}
        ],

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
        case UPLOAD_PHOTO_SUCCESS:

            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
            };

        default:
            return state;
    }
}

//Action Creators
export let addPost = (newPostText) => ({type: ADD_POST, newPostText});
export let setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export let setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});
export let uploadPhotoSuccess = (photos) => ({type: UPLOAD_PHOTO_SUCCESS, photos});

//Thunk creators
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));
}


export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response));
}


export const updateUserStatus = (userStatus) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(userStatus);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(userStatus));
    }
}

export const saveAvatar = (file) => async (dispatch) => {
    let response = await profileAPI.saveAvatar(file);
    if (response.resultCode === 0) {
        let photos = response.data.photos;
        dispatch(uploadPhotoSuccess(photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        let action = response.messages.length > 0 ? response.messages[0] : 'Неопределённая ошибка!';
        dispatch(stopSubmit('edit-profile', {_error: action}));
        return Promise.reject(response.messages[0]); //Возврат промиса при ошибке
    }
}


export default profileReducer;