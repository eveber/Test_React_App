import ReactDOM from "react-dom";
import App from "./App";
//import state, {addPost} from "./redux/state";
import React from "react";
import {addPost, updateTextAreaPost} from "./redux/state";


export let reRenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateTextAreaPost={updateTextAreaPost} />, document.getElementById('root'));
}