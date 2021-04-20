import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Container>
            <Navbar justify variant="tabs" defaultActiveKey="/home">
                <Link to="/Homepage" />
                <Link to="/Profile" />
                <Link to="/About" />
            </Navbar>
        </Container>
    );
}

export default Navigation;
