import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Button } from 'react-bootstrap';


function Homepage () {
    return (
        <>
            <Navigation />
            <div className='container logo' align='center'>
            <Header />
                <p>
                    <Button variant="outline-primary">Art</Button>{' '}
                    <Button variant="outline-info">Science</Button>{' '}
                    <Button variant="outline-success">Sports</Button>{' '}
                    <Button variant="outline-warning">Entertainment</Button>{' '}
                    <Button variant="outline-danger">Geography</Button>{' '}
                    <Button variant="outline-dark">History</Button>{' '}
                </p>
            </div>
        </>
    )
    };

export default Homepage;