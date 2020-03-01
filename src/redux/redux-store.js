import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendBarReducer from "./friendbar-reducer";
import UsersReducer from "./users-reducer";

//reducers
let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        friendsBar: friendBarReducer,
        usersPage: UsersReducer
    }
);

//store
let store = createStore(reducers);

export default store;