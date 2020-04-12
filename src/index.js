import './index.scss';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {HashRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>, document.getElementById('root')
);


serviceWorker.unregister();


