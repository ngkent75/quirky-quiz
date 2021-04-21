import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Container, Button } from 'react-bootstrap';

function Header() {
    return (
            <Container>
                <h1>Welcome to Quirky Quiz!</h1>
                <p>
                    Please take a moment to read our <span> <Link to='/about'>about</Link> </span> page if you aren't familiar with our site! 
                </p>
                <p>
                    Otherwise feel free to <span> <Link to='/profile'>login,</Link> </span> <span> <Link to='/profile'>sign-up</Link> </span>and continue making or taking our Quirky Quizzes!
                </p>
            </Container>
    );
}

export default Header;