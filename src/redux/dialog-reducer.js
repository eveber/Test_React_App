//Action types consts
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_AREA_MESSAGE = 'UPDATE-TEXT-AREA-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, talkerName: 'Тимченко Николай', linkId: 1},
        {id: 2, talkerName: 'Клименко Валентин', linkId: 2},
        {id: 3, talkerName: 'Кузнецов Андрей', linkId: 3},
        {id: 4, talkerName: 'Порошенко Пётр', linkId: 4},
        {id: 5, talkerName: 'Прокопенко Авдотья', linkId: 5}],

    messages: [
        {id: 1, message: 'Превед!'},
        {id: 2, message: 'Как дела?'},
        {id: 3, message: 'Пока!'}],

    newMessageText: ''
};

let dialogReducer = (state = initialState, action) => {
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