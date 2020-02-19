import './index.scss';
import * as serviceWorker from './serviceWorker';
import {reRenderEntireTree} from "./render";
import state from "./redux/state";

//Вызов первой отрисовки дерева
reRenderEntireTree(state);





serviceWorker.unregister();


