import React from 'react';
import './Variables.scss';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='App-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className="app-content-wrapper">
                    <Switch>
                        <Route render={()=> <Redirect to={'/profile'} />} exact path='/' />
                        <Route render={withSuspense(ProfileContainer)} path='/profile/:userId?'/>
                        <Route render={withSuspense(DialogsContainer)} path='/dialogs'/>
                        <Route component={News} path='/news'/>
                        <Route component={Music} path='/music'/>
                        <Route render={withSuspense(UsersContainer)} path='/users'/>
                        <Route component={Settings} path='/settings'/>
                        <Route component={Login} path='/login'/>
                        <Route render={()=> <div>Page not found.. Error 404!</div>} path='*' />
                    </Switch>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose (
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

