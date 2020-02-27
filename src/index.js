import './index.scss';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

let reRenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

reRenderEntireTree(store.getState()); //Вызов первой отрисовки дерева с актуальным стейтом

//Передача "reRenderEntireTree" в STATE as callback (как слушателя) для остальных отрисовок, стейт тоже внутри!
store.subscribe(() => {
    reRenderEntireTree();
});


serviceWorker.unregister();


