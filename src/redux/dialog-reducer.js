//Action types consts
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_AREA_MESSAGE = 'UPDATE-TEXT-AREA-MESSAGE';

let dialogReducer= (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_TEXT_AREA_MESSAGE:
           state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

//Action Creators
export let addMessageActionCreator = () => ({type: ADD_MESSAGE});
export let updateTextAreaMessageActionCreator = (message) => ({type: UPDATE_TEXT_AREA_MESSAGE, newText: message});

export default dialogReducer;