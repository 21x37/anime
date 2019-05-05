import React from 'react';
import Header from './header/Header';
import HomePage from './homePage/HomePage';
import Kitsu from './homePage/Kitsu/Kitsu';

import axios from 'axios';


// Home Page
const headers = {
    'Content-Type': 'application/json',
    Accept: "text/plain"
}

const Index = () => {

    axios.get('https://aws.random.cat/meow').then((response) => console.log(response));

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