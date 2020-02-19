import React from 'react';
import './Variables.scss';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='App-wrapper'>
                <Header />
                <Navbar state={props.state.friendsBar} />
                <div className="app-content-wrapper">
                    <Route render={()=><Profile profilePage={props.state.profilePage}
                                                addPost={props.addPost}
                                                updateTextAreaPost={props.updateTextAreaPost} />}  path='/profile'/>
                    <Route render={()=><Dialogs dialogsPage={props.state.dialogsPage} />} path='/dialogs'/>
                    <Route component={News} path='/news'/>
                    <Route component={Music} path='/music'/>
                    <Route component={Settings} path='/settings'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;