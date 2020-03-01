const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            avatarUrl: '',
            follow: true,
            userFullName: 'Козир Богдан',
            status: 'I am the God!',
            location: {country: 'Ukraine', city: 'Polonne'}
        },
        {
            id: 2,
            avatarUrl: '',
            follow: false,
            userFullName: 'Кравчук Вадім',
            status: 'I am the God to!!',
            location: {country: 'Ukraine', city: 'Kiev'}
        },
        {
            id: 3,
            avatarUrl: '',
            follow: true,
            userFullName: 'Фіяльчук Анатолій',
            status: 'Cварщик я..',
            location: {country: 'Ukraine', city: 'Kharkov'}
        }
    ]
};

let UsersReducer = (state = initialState, action) => {
    //debugger;
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
        default:
            return state;
    }
}

//Action creators
export let setUsersAC = (users) => ({type: SET_USERS, users});
export let userFollowAC = (userId) => ({type: FOLLOW, userId});
export let userUnfollowAC = (userId) => ({type: UNFOLLOW, userId});

export default UsersReducer;



