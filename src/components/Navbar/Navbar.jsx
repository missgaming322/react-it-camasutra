import React from "react";
import s from './Navbar.module.css';
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <Link to="profile">Profile</Link>
            </div>
            <div>
                <Link to="dialog">Dialogs</Link>
            </div>
            <div>
                <a href="#s">News</a>
            </div>
            <div>
                <a href="#s">Music</a>
            </div>
            <div>
                <a href="#s">Settings</a>
            </div>
        </nav>
    );
}
export default Navbar;