import {reRenderEntireTree} from "../render";

let state = {
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
            {id: 3, message: 'Пока!'}]
    },
    friendsBar: {
        friends: [
            {id: 1, friendName: 'Коля'},
            {id: 2, friendName: 'Петя'},
            {id: 3, friendName: 'Миша'}]
    }
};

//window.state = state;

//Add post in profile page
export let addPost = () => {
    let post = {
        id: 5,
        postMessage: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';
    reRenderEntireTree(state); //Перерисовка дерева при изменении STATE
}

export let updateTextAreaPost = (newText) => {
    state.profilePage.newPostText = newText;
    reRenderEntireTree(state); //Перерисовка дерева при изменении STATE
}

export default state;