import React from 'react';
import m from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={m.nav}>
            <div className={m.item}>
                <a href='#s'>Profile</a>
            </div>
            <div className={m.item}>
                <a href='#s'>Messages</a>
            </div>
            <div className={m.item}>
                <a href='#s'>News</a>
            </div>
            <div className={m.item}>
                <a href='#s'>Music</a>
            </div>
            <div className={m.item}>
                <a href='#s'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;