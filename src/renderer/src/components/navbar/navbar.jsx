import React from 'react';
import { NavbarStyled } from './navbar';

const Navbar = () => {
    return (
        <NavbarStyled>
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </NavbarStyled>
    );
};

export default Navbar
