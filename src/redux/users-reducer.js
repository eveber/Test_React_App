const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1

};

let UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]} //Копируем стейт, копируем массив юзеров и довисываем к нему юзеров из экшн
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
        default:
            return state;
    }
}

//Action creators
export let setUsersAC = (users) => ({type: SET_USERS, users});
export let userFollowAC = (userId) => ({type: FOLLOW, userId});
export let userUnfollowAC = (userId) => ({type: UNFOLLOW, userId});
export let setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});

export default UsersReducer;



