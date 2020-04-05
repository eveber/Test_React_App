//Action types consts
const ADD_MESSAGE = 'ADD-MESSAGE';
//const UPDATE_TEXT_AREA_MESSAGE = 'UPDATE-TEXT-AREA-MESSAGE';

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
        {id: 3, message: 'Пока!'}]

};

let dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 5,
                message: action.messageText,
            };

            return {
                ...state,
                messages: [...state.messages, message]
            };

        default:
            return state;
    }
}

//Action Creators
export let addMessage = (messageText) => ({type: ADD_MESSAGE, messageText});

export default dialogReducer;