import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Bubbles from '../components/Bubbles';
import '../App.css';


function Homepage () {
    return (
        <>
            <Bubbles />
            <Navigation />
            <div className='container logo' align='center'>
            <Header />
            </div>
            <div className='container-fluid' align='center'>
                <div className='row'>
                    <div className='col-4 md-auto'>
                        <Card className='justify-content-center'>
                            <Card.Img variant="top" src="./assets/art-category.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Art</Card.Title>
                                <Card.Text>
                                    The various classifications of art include: fine art, visual art, plastic art, performance art, applied art and decorative art.
                                </Card.Text>
                                <Button variant="outline-primary">Art Category</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4 md-auto'>
                        <Card className='justify-content-center'>
                            <Card.Img variant="top" src="./assets/science-category.png" height='175px'/>
                            <Card.Body>
                                <Card.Title>Science</Card.Title>
                                <Card.Text>
                                    Science is the pursuit and application of knowledge and understanding of the natural and social world.
                                </Card.Text>
                                <Button variant="outline-info">Science Category</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4 md-auto'>
                        <Card className='justify-content-center'>
                            <Card.Img variant="top" src="./assets/sports-category.jpg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Sports</Card.Title>
                                <Card.Text>
                                    The different types of sports categories include: individual sports, partner sports, team sports, and extreme sports.
                                </Card.Text>
                                <Button variant="outline-success">Sports Category</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 md-auto'>
                        <Card className='justify-content-center'>
                            <Card.Img variant="top" src="./assets/entertainment-category.jpg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Entertainment</Card.Title>
                                <Card.Text>
                                    The types of entertainment include: movies, tv shows, books, video games, and music.
                                </Card.Text>
                                <Button variant="outline-warning">Entertainment Category</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4 md-auto'>
                        <Card className='justify-content-center'>
                            <Card.Img variant="top" src="./assets/geography-category.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Geography</Card.Title>
                                <Card.Text>
                                    Geography is the study of places and the relationships between people and their environments.
                                </Card.Text>
                                <Button variant="outline-danger">Geography Category</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4 md-auto'>
                        <Card className='justify-content-center'>
                            <Card.Img variant="top" src="./assets/history-category.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>History</Card.Title>
                                <Card.Text>
                                    History is the study of people, actions, decisions, interactions and behaviours.
                                </Card.Text>
                                <Button variant="outline-dark">History Category</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    )
    };

export default Homepage;