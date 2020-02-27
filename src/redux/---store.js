// import profileReducer from "./profile-reducer";
// import dialogReducer from "./dialog-reducer";
// import friendBarReducer from "./friendbar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, postMessage: 'Hey! Anybody here?', likeCount: 10},
//                 {id: 2, postMessage: 'Nope, no one here!', likeCount: 4},
//                 {id: 3, postMessage: 'Ok, then fuck no one!', likeCount: 65}],
//
//             newPostText: ''
//         },
//
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, talkerName: 'Тимченко Николай', linkId: 1},
//                 {id: 2, talkerName: 'Клименко Валентин', linkId: 2},
//                 {id: 3, talkerName: 'Кузнецов Андрей', linkId: 3},
//                 {id: 4, talkerName: 'Порошенко Пётр', linkId: 4},
//                 {id: 5, talkerName: 'Прокопенко Авдотья', linkId: 5}],
//
//             messages: [
//                 {id: 1, message: 'Превед!'},
//                 {id: 2, message: 'Как дела?'},
//                 {id: 3, message: 'Пока!'}],
//
//             newMessageText: ''
//         },
//         friendsBar: {
//             friends: [
//                 {id: 1, friendName: 'Коля'},
//                 {id: 2, friendName: 'Петя'},
//                 {id: 3, friendName: 'Миша'}]
//         }
//     },
//
//     _callSubscriber() {
//         console.log('State was updated!');
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer (this._state.profilePage, action);
//         this._state.dialogsPage = dialogReducer (this._state.dialogsPage, action);
//         //this._state.friendsBar = friendBarReducer (this._state.friendsBar, action);
//         this._callSubscriber(this._state);
//     },
//
//     getState() {
//         return this._state;
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     }
//
// };
//
//
// window.store = store; //Для просмотра стейта в консоли
//
// export default store;