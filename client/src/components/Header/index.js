import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Container } from 'react-bootstrap';

function Header() {
    return (
            <Container>
                <div className='headerComponent'>
                <h1 className='header'>Welcome to Quirky Quiz!</h1>
                <p className='welcome'>
                    Please take a moment to read our <span> <Link to='/about'>about</Link> </span> page if you aren't familiar with our site! 
                </p>
                <p className='choice'>
                    Otherwise feel free to <span> <Link to='/login'>login,</Link> </span> <span> <Link to='/login'>sign-up</Link> </span>and continue making or taking our Quirky Quizzes!
                </p>
                </div>
            </Container>
    );
}

export default Header;