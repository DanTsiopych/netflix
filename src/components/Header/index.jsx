import React from 'react';
import './styled.css';
import Nav from '../Nav';

import Glass from '../../imgs/icon-magnifying-glass.svg';


const Header = ({setSearch}) => {
    
    
    return (
            <header className='header'>
                <a className='logo' href='#'
                    onClick={() => setSearch(true)}
                >NETFLIX</a>
                <Nav />
                <img className='glass-icon' src={Glass} 
                    onClick={() => setSearch(false)}
                />
            </header>
    )
};

export default Header;
