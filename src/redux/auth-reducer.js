import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_USER_PROFILE_DATA = 'SET_AUTH_DATE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false, //Flag for run preloader

    userFullName: null,
    userSmallPhoto: null
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                ...action.data
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }

}

//Action creators
export let setUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_DATA,
    payload: {userId, email, login, isAuth}
});
export let setUserProfileData = (userFullName, userSmallPhoto) => ({
    type: SET_USER_PROFILE_DATA,
    data: {userFullName, userSmallPhoto}
});

export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


//Thunk creators
export const getAuthData = () => (dispatch) => {
     return authAPI.me()
        .then((response) => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setUserData(id, email, login, true));
            }
            let userId = response.data.id;
            //Запрос профиля для установки авы
            // итд..
            profileAPI.getProfile(userId)
                .then((response) => {
                    let {fullName, photos} = response;
                    dispatch(setUserProfileData(fullName, photos.small));
                });
        });

}

export const login = (email, password, rememberMe) => (dispatch) => {
    dispatch(toggleIsFetching(true)); //For Preloader!!!
    authAPI.login(email, password, rememberMe) //+ isAuth
        .then((response) => {
            dispatch(toggleIsFetching(false));
            if (response.resultCode === 0) {
                dispatch(getAuthData());
            } else {
                let action = response.messages.length > 0 ? response.messages[0] : 'Неопределённая ошибка!'
                dispatch(stopSubmit('login', {_error: action}))
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        });
}

export default authReducer;