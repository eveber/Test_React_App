import React from 'react';
import m from './Header.module.scss';

const Header = () => {
    return (
        <header className = {m.header}>
            <img className= {m.logo} src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/868110/original/5518108cc4880baab2492895d8f9df0fd321baeb/create-2-custom-logo-designs-exclusive-hi-quality.png" />
        </header>
    );
}

export default Header;