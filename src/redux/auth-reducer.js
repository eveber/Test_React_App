import {authAPI, profileAPI, sequrityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_USER_PROFILE_DATA = 'SET_AUTH_DATE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    captchaUrl: null,
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
            };
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                ...action.data
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

            case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
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

export let setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});

export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


//Thunk
export const getAuthData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setUserData(id, email, login, true)); //+ isAuth
    }

    let userId = response.data.id;
    //Запрос профиля для установки авы итд..
    response = await profileAPI.getProfile(userId);
    let {fullName, photos} = response;
    dispatch(setUserProfileData(fullName, photos.small));
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(toggleIsFetching(true)); //For Preloader!!!
    let response = await authAPI.login(email, password, rememberMe, captcha);
    dispatch(toggleIsFetching(false));
    if (response.resultCode === 0) {
        dispatch(getAuthData());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptcha());
        }

        let action = response.messages.length > 0 ? response.messages[0] : 'Неопределённая ошибка!'
        dispatch(stopSubmit('login', {_error: action}));
    }
}

export const getCaptcha = () => async (dispatch) => {
    let response = await sequrityAPI.getCaptcha();
        dispatch(setCaptchaUrl(response.url));
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;