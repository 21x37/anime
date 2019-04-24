import React from 'react';
import Header from './header/Header';
import HomePage from './homePage/HomePage';
import Kitsu from './homePage/Kitsu/Kitsu';



// Home Page


const Index = () => {
    return (
        <div className='homepage'>
            <Header/>
            <HomePage />
            <Kitsu />
            <p>Rendered</p>
        </div>
    )
}

export default Index;