import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendBarReducer from "./friendbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

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
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;