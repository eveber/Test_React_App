let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, postMessage: 'Hey! Anybody here?', likeCount: 10},
                {id: 2, postMessage: 'Nope, no one here!', likeCount: 4},
                {id: 3, postMessage: 'Ok, then fuck no one!', likeCount: 65}],

            newPostText: ''
        },

        dialogsPage: {
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
        },
        friendsBar: {
            friends: [
                {id: 1, friendName: 'Коля'},
                {id: 2, friendName: 'Петя'},
                {id: 3, friendName: 'Миша'}]
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber () {
        console.log('State was updated!');
    },

    addPost() {
        let post = {
            id: 5,
            postMessage: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state); //Перерисовка дерева при изменении STATE
    },

    updateTextAreaPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state); //Перерисовка дерева при изменении STATE
    },

    addMessage() {
        let message = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(message);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state); //Перерисовка дерева при изменении STATE
    },

    updateTextAreaMessage(newText){
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state); //Перерисовка дерева при изменении STATE
    },

    subscribe(observer){
        this._callSubscriber = observer;
    }
};

window.store = store; //Для просмотра стейта в консоли

export default store;