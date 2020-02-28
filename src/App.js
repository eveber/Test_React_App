import React from 'react';
import './Variables.scss';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='App-wrapper'>
            <Header />
            <Navbar />
            <div className="app-content-wrapper">
                <Route render={() => <Profile />} path='/profile'/>
                <Route render={() => <DialogsContainer />} path='/dialogs'/>
                <Route component={News} path='/news'/>
                <Route component={Music} path='/music'/>
                <Route component={Settings} path='/settings'/>
            </div>
        </div>
    );
}

export default App;