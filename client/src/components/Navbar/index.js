import React from 'react';
import './style.css';
import { Navbar, Container } from 'react-bootstrap';

function Nav() {
    return (
        <Container>
            <Nav justify variant="tabs" defaultActiveKey="/home">
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
            </Nav>
        </Container>
    );
}

export default Nav;