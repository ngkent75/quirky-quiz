import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import axios from "axios";
const Navigation = () => {


    async function handleLogout() {
        console.log('logout')
        await axios.post('/api/user/logout', { withCredentials: true })
            .then(() => {
                console.log('Logout successful')
            })
            .catch(err => console.log(err));
    };

    return (
        <Container>
            <Navbar className='nav' bg="white" expand="lg">
                <Navbar.Brand>Quirky Quiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto !important">
                        <NavLink className="nav-button" to="/home">Home</NavLink>
                        <NavLink className="nav-button" to="/profile">Profile</NavLink>
                        <NavLink className="nav-button" to="/about">About</NavLink>
                    </Nav>
                    <NavLink className="nav-button" to="/login">Login</NavLink>
                    <NavLink className="nav-button" to="/home" onClick={handleLogout}>Logout</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;