import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
function Navigation() {
    return (
        <Container>
            <Navbar className='nav' bg="white" expand="lg">
            <Navbar.Brand>Quirky Quiz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto !important">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/about">About</NavLink>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}
export default Navigation;