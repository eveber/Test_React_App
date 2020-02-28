import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendBarReducer from "./friendbar-reducer";

//reducers
let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        friendsBar: friendBarReducer
    }
);

//store
let store = createStore(reducers);



export default store;