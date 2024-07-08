import React from 'react';
import './styled.css';
import Nav from '../Nav';
import Glass from '../../imgs/icon-magnifying-glass.svg';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <header className='header'>
            <Link className='logo' to='/'> NETFLIX </Link>
            <Nav />
            <Link to='/search'>
                <img className='glass-icon' src={Glass} />
            </Link>
        </header>
    )
};

export default Header;
