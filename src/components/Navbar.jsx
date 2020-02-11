import React from 'react';
import m from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className = {m.nav}>
            <div className = {m.item}>
                <a href='#'>Profile</a>
            </div>
            <div className = {m.item}>
                <a href='#'>Messages</a>
            </div>
            <div className = {m.item}>
                <a href='#'>News</a>
            </div>
            <div className = {m.item}>
                <a href='#'>Music</a>
            </div>
            <div className = {m.item}>
                <a href='#'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;