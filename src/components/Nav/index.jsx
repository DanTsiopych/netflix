import React from 'react';
import './styled.css';
import { HashLink as NavLink } from 'react-router-hash-link';
const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink className='nav-element'
                smooth to="/#best" >BEST OF ALL TIME</NavLink>
            <NavLink className='nav-element'
                smooth to="/#trending">TRENDING</NavLink>
            <NavLink className='nav-element'
                smooth to="/#upcoming">UPCOMING</NavLink>
        </nav>
    )
};

export default Nav;
