import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Card, Button, Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Bubbles from '../components/Bubbles';
import '../App.css';


function Homepage () {
    return (
        <>
        <Container>
            <Bubbles />
            <Navigation />
            <div className='container logo' align='center'>
            <Header />
            </div>
            <div className='container-fluid' align='center'>
                <div className='row'>
                    <div className='col-4 md-auto home-card'>
                        <Card style={{ width: '18rem'}} >
                            <Card.Img variant="top" src="./assets/art-category.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Art</Card.Title>
                                <Card.Text>
                                    The various classifications of art include: fine art, visual art, plastic art, performance art, applied art and decorative art.
                                </Card.Text>
                                <Link to={{pathname: '/category/1'}}>
                                    <Button variant="outline-primary">Art Category </Button> </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4 md-auto home-card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/science-category.png" height='175px'/>
                            <Card.Body>
                                <Card.Title>Science</Card.Title>
                                <Card.Text>
                                    Science is the pursuit and application of knowledge and understanding of the natural and social world.
                                </Card.Text>
                                <Link to={{pathname: '/category/2'}}> 
                                <Button variant="outline-info">Science Category </Button> </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4 md-auto home-card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/sports-category.jpg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Sports</Card.Title>
                                <Card.Text>
                                    The different types of sports categories include: individual sports, partner sports, team sports, and extreme sports.
                                </Card.Text>
                                <Link to={{pathname: '/category/3'}}> 
                                <Button variant="outline-success">Sports Category </Button> </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 md-auto home-card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/entertainment-category.jpg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Entertainment</Card.Title>
                                <Card.Text>
                                    The types of entertainment include: movies, tv shows, books, video games, and music.
                                </Card.Text>
                                <Link to={{pathname: '/category/4'}}> 
                                <Button variant="outline-warning">Entertainment Category </Button> </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4 md-auto home-card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/geography-category.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Geography</Card.Title>
                                <Card.Text>
                                    Geography is the study of places and the relationships between people and their environments.
                                </Card.Text>
                                <Link to={{pathname: '/category/5'}}> 
                                <Button variant="outline-danger">Geography Category </Button> </Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4 md-auto home-card'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/history-category.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>History</Card.Title>
                                <Card.Text>
                                    History is the study of people, actions, decisions, interactions and behaviours.
                                </Card.Text>
                                <Link to={{pathname: '/category/6'}}> 
                                <Button variant="outline-dark">History Category </Button> </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </Container> 
        </>
    )
    };

export default Homepage;