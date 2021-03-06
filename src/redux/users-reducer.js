import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLOWING';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false, //Flag for run preloader
    isFollowing: [] //Array of users Id for disable user button when follow/unfollow

};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users //Копируем стейт, копируем юзеров
            }
        case FOLLOW:
            return {
                ...state, //Копируем стейт
                users: state.users.map((u) => { //копируем юзеров, т.к. в одном из них нужно что-то менять
                    if (u.id === action.userId) { // Условие, если айдишка экшн и копии юзера стейт совпадают, то:
                        return {...u, followed: true} //Возвращаем копию юзера, но меняем что-то у него(followed)
                    }
                    return u; //возвращаем если айдишка не совпадает
                })
            }
        case UNFOLLOW:
            return {
                ...state, //Копируем стейт
                users: state.users.map((u) => { //копируем юзеров, т.к. в одном из них нужно что-то менять
                    if (u.id === action.userId) { // Услови, если айдишка экшн и копии юзера стейт совпадают, то:
                        return {...u, followed: false} //Возвращаем копию юзера, но меняем что-то у него(followed)
                    }
                    return u; //возвращаем если айдишка не совпадает
                })
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.usersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId] //Дописываем юзера в конец массива зафоловенных зеров
                    : state.isFollowing.filter((userId) => userId !== action.userId) //Оставляем только тех, кто не равен входящей айди.
            }
        default:
            return state;
    }
}

//Action creators
export let setUsers = (users) => ({type: SET_USERS, users});
export let followSuccess = (userId) => ({type: FOLLOW, userId});
export let unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export let setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export let setUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let toggleIsFollowing = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING, isFollowing, userId});


//Thunk creators
export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true)); //For Preloader!!!
    let response = await usersAPI.requestUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setUsersCount(response.totalCount));
    dispatch(setCurrentPage(page));
}


export const follow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleIsFollowing(false, userId));
}


export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    let response = await usersAPI.unFollow(userId);
    if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleIsFollowing(false, userId));
}


export default usersReducer;



