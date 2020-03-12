import React from 'react';
import './Variables.scss';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className='App-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className="app-content-wrapper">
                <Route render={() => <ProfileContainer />} path='/profile/:userId?'/>
                <Route render={() => <DialogsContainer />} path='/dialogs'/>
                <Route component={News} path='/news'/>
                <Route component={Music} path='/music'/>
                <Route render={() => <UsersContainer />} path='/users'/>
                <Route component={Settings} path='/settings'/>
            </div>
        </div>
    );
}

export default App;