import React from 'react';
import './Variables.scss';
import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {
  return (
    <div className='App-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
