import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to={'/dialogs'}>Messages</NavLink></div>
            <div className={s.item}><NavLink to={'/'}>News</NavLink></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </nav>
    );
}

export default Navbar;