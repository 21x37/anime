import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div className='header-wrapper'>
        <div className='header-container'>
            <Link className='header-home' to='/'><h1>Anime Way</h1></Link>
            <div className='header-link-wrapper'>
                <Link className='header-link' to='/'><span>Home</span></Link>
                <Link className='header-link' to='/about'><span>About</span></Link>
            </div>
        </div>
    </div>
    );
};

export default Header;