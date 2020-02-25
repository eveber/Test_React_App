import './index.scss';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

reRenderEntireTree(store.getState()); //Вызов первой отрисовки дерева с актуальным стейтом
store.subscribe(reRenderEntireTree); //Передача "reRenderEntireTree" в STATE as callback для остальніх отрисовок


serviceWorker.unregister();


