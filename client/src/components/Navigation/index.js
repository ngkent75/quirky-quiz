import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import axios from "axios";
class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false }
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
         let isLoggedIn = this.state.isLoggedIn;
        console.log(isLoggedIn);
        let button;

        const handleLogout = async () => {
            // e.preventDefault();
            this.setState({ isLoggedIn: true });
            console.log('logout')
            console.log(isLoggedIn)
            await axios.post('/api/user/logout', { withCredentials: true })
                .then(() => {
                    console.log('Logout successful')
                    document.location.replace('/Home')
                })
                .catch(err => console.log(err));
        }

        if (isLoggedIn) {
            button = <NavLink className="nav-button" onClick={this.handleLogoutClick} to="/login">Login</NavLink>
        } else {
            button = <Button className="nav-button" onClick={handleLogout} to="/login">Logout</Button>
        }
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
                        {button}
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}
export default Navigation;