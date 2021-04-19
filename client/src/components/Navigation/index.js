import React from 'react';
import './style.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Container>
            <Navbar justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                 <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>Disabled
                </Nav.Link>
                </Nav.Item>
            </Navbar>
        </Container>
    );
}

export default Navigation;
