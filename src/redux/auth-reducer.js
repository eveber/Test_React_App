const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_USER_PROFILE_DATA = 'SET_AUTH_DATE';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

    userFullNAme: null,
    userSmallPhoto: null
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }

}

//Action creators
export let setUserData = (userId, email, login) => ({
    type: SET_AUTH_DATA,
    data: {userId, email, login}
});
export let setUserProfileData = (userFullNAme, userSmallPhoto) => ({
    type: SET_USER_PROFILE_DATA,
    data: {userFullNAme, userSmallPhoto}
});

export default authReducer;