import React from 'react';
import Navigation from '../components/Navigation';
import AboutInfo from '../components/AboutInfo';
import Bubbles from '../components/Bubbles';
import { Container } from 'react-bootstrap';


function About () {

    return (
        <>
        <Container>
            <Bubbles/>
            <Navigation />
            <AboutInfo />
        </Container>
        </>
    )
}

export default About;