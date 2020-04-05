import {getAuthData} from "./auth-reducer";

//Constants
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

//Reducer
let appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;

    }
}

//Action creators
export let initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//Thunks
export let initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthData());
    Promise.all([promise])
        .then (() => {
            dispatch(initializedSuccess());
        }
    );
};
export default appReducer;