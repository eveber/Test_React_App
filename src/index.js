import './index.scss';
import * as serviceWorker from './serviceWorker';
//import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
//import {addMessage, addPost, updateTextAreaMessage, updateTextAreaPost} from "./redux/state";
import store from "./redux/state";


let reRenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={store.addPost.bind(store)}
                         addMessage={store.addMessage.bind(store)}
                         updateTextAreaPost={store.updateTextAreaPost.bind(store)}
                         updateTextAreaMessage={store.updateTextAreaMessage.bind(store)}/>, document.getElementById('root'));
}


reRenderEntireTree(store.getState()); //Вызов первой отрисовки дерева
store.subscribe(reRenderEntireTree); //Передача "reRenderEntireTree" в STATE as callback для остальніх отрисовок


serviceWorker.unregister();


