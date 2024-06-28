import React from 'react';
import './styled.css';

const Nav = () => {
    function Scroll({topValue, leftValue, behaviorValue}) {
        return {
            top: topValue,
            left: leftValue,
            behavior: behaviorValue
        }
    }
    
    return (
            <nav className='nav'>
                <a className='nav-element' href='#'
                    onClick={() => window.scrollTo(Scroll({topValue: 750, leftValue: 0, behaviorValue: 'smooth'}))}>BEST OF ALL TIME</a>
                <a className='nav-element' href='#'
                    onClick={() => window.scrollTo(Scroll({ topValue: 2515, leftValue: 0, behaviorValue: 'smooth' }))}>TRENDING</a>
                <a className='nav-element' href='#'
                    onClick={() => window.scrollTo(Scroll({ topValue: 4280, leftValue: 0, behaviorValue: 'smooth' }))}>UPCOMING</a>
            </nav>
    )
};

export default Nav;
