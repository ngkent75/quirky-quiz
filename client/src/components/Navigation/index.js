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

        const sessionCheck = () => {
            axios.post('/api/user/sessionid', { withCredentials: true })
            .then(res => console.log(res.data.id))
            .catch(err => console.log(err))   
            // return sessionId;

        }

        

        async function handleLogout() {
            console.log('logout')
            console.log(isLoggedIn)
            await axios.post('/api/user/logout', { withCredentials: true })
            .then(() => {
                console.log('Logout successful')
            })
            .catch(err => console.log(err));
            this.setState({ isLoggedIn: true });
            // document.location.replace('/Home')
        }
        

        const testLog = () => {
            // console.log(isLoggedIn)
            // console.log(sessionCheck());
            sessionCheck();
        }

        if (isLoggedIn) {
            button = <Button className="nav-button" onClick={handleLogout}>Logout</Button>
        } else {
            button = <NavLink className="nav-button" onClick={this.handleLoginClick} to="/login">Login</NavLink>
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
                        <Button className="nav-button" onClick={testLog} to="/login">Test</Button>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}
export default Navigation;