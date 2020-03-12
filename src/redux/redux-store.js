import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendBarReducer from "./friendbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

//reducers
let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        friendsBar: friendBarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

//store
let store = createStore(reducers);

window.store = store;

export default store;