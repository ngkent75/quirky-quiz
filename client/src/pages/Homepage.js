import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Card } from 'react-bootstrap';
import Footer from '../components/Footer';


function Homepage () {
    return (
        <>
            <Navigation />
            <div className='container logo' align='center'>
            <h1> <img src='./assets/QuirkyQuiz.jpg' height='300px' width='300px' alt="quirky quiz logo"/> </h1>
            <Header />
            </div>
            <div className='container' align='center'>
                <div className='row'>
                    <div className='col-4'>
                        <Card style={{ width: '18rem', height: '25rem' }} align='center'>
                            <Card.Img variant="top" src="./assets/art-category.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Art</Card.Title>
                                <Card.Text>
                                    The various classifications of art include: fine art, visual art, plastic art, performance art, applied art and decorative art.
                                </Card.Text>
                                <Link to={{
                                    pathname: '/quizlanding',
                                    state: { category: 1 }
                                }} 
                                variant="outline-primary">Art Category</Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card style={{ width: '18rem', height: '25rem' }} align='center'>
                            <Card.Img variant="top" src="./assets/science-category.png" height='175px'/>
                            <Card.Body>
                                <Card.Title>Science</Card.Title>
                                <Card.Text>
                                    Science is the pursuit and application of knowledge and understanding of the natural and social world.
                                </Card.Text>
                                <Link to={{
                                    pathname: '/quizlanding',
                                    state: { category: 2 }
                                }} 
                                variant="outline-info">Science Category</Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card style={{ width: '18rem', height: '25rem' }} align='center'>
                            <Card.Img variant="top" src="./assets/sports-category.jpg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Sports</Card.Title>
                                <Card.Text>
                                    The different types of sports categories include: individual sports, partner sports, team sports, and extreme sports.
                                </Card.Text>
                                <Link to={{
                                    pathname: '/quizlanding',
                                    state: { category: 3 }
                                }} 
                                variant="outline-success">Sports Category</Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <Card style={{ width: '18rem', height: '25rem' }} align='center'>
                            <Card.Img variant="top" src="./assets/entertainment-category.jpg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Entertainment</Card.Title>
                                <Card.Text>
                                    The types of entertainment include: movies, tv shows, books, video games, and music.
                                </Card.Text>
                                <Link to={{
                                    pathname: '/quizlanding',
                                    state: { category: 4 }
                                }} 
                                variant="outline-warning">Entertainment Category</Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card style={{ width: '18rem', height: '25rem'}} align='center'>
                            <Card.Img variant="top" src="./assets/geography-category.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Geography</Card.Title>
                                <Card.Text>
                                    Geography is the study of places and the relationships between people and their environments.
                                </Card.Text>
                                <Link to={{
                                    pathname: '/quizlanding',
                                    state: { category: 5 }
                                }} 
                                variant="outline-danger">Geography Category</Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card style={{ width: '18rem', height: '25rem' }} align='center'>
                            <Card.Img variant="top" src="./assets/history-category.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>History</Card.Title>
                                <Card.Text>
                                    History is the study of people, actions, decisions, interactions and behaviours.
                                </Card.Text>
                                <Link to={{
                                    pathname: '/quizlanding',
                                    state: { category: 6 }
                                }} 
                                variant="outline-dark">History Category</Link>
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