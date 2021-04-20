import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Container>
            <Navbar justify variant="tabs" defaultActiveKey="/home">
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/Profile">Profile</NavLink>
                <NavLink to="/About">About</NavLink>
                {/* <NavLink to="/Quiz">Quiz</NavLink> */}
            </Navbar>
        </Container>
    );
}

export default Navigation;
