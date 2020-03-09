const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

};

let UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, users: action.users //Копируем стейт, копируем юзеров
            }
        case FOLLOW:
            return {
                ...state, //Копируем стейт
                users: [...state.users.map((u) => { //копируем юзеров, т.к. в одном из них нужно что-то менять
                    if (u.id === action.userId) { // Условие, если айдишка экшн и копии юзера стейт совпадают, то:
                        return {...u, follow: true} //Возвращаем копию юзера, но меняем что-то у него(фоллоу)
                    }
                    return u; //возвращаем если айдишка не совпадает (или уже модифицированную копию)
                })]
            }
        case UNFOLLOW:
            return {
                ...state, //Копируем стейт
                users: [...state.users.map((u) => { //копируем юзеров, т.к. в одном из них нужно что-то менять
                    if (u.id === action.userId) { // Услови, если айдишка экшн и копии юзера стейт совпадают, то:
                        return {...u, follow: false} //Возвращаем копию юзера, но меняем что-то у него(фоллоу)
                    }
                    return u; //возвращаем если айдишка не совпадает (или уже модифицированную копию)
                })]
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
        default:
            return state;
    }
}

//Action creators
export let setUsers = (users) => ({type: SET_USERS, users});
export let userFollow = (userId) => ({type: FOLLOW, userId});
export let userUnfollow = (userId) => ({type: UNFOLLOW, userId});
export let setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export let setUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default UsersReducer;



