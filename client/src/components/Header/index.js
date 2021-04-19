import React from 'react';
import './style.css';
import { Container, Jumbotron } from 'react-bootstrap';

function Header() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Don't know where to start? Click on a category below to see some popular quizzes!</h1>
                <p>
                **Clickable Links for searchable categories**
                </p>
            </Container>
        </Jumbotron>
    );
}

export default Header;