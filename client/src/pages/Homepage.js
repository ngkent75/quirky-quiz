import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';


function Homepage () {
    return (
        <>
            <Navigation />
            <div className='container logo' align='center'>
            <h1> <img src='./assets/QuirkyQuiz.jpg' height='300px' width='300px'/> </h1>
            <Header />
            </div>
        </>
    )
    };

export default Homepage;