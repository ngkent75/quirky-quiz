// import useToken from '../utils/useToken';
// import Login from '../components/Login/Login';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Particle from '../components/Particles';
import '../App.css';

const Profile = () => {
    // const { token, setToken } = useToken();

    // if (!token) {
    //     return <Login setToken={setToken} />;
    // }

    return (
        <>
            <Navigation />
            <Particle />
            <h1>User's Profile</h1>
            <div className='container-fluid' align='center'>
                <div className='row'>
                    <div className='col-6'>
                        <Card style={{ width: '18rem' }} align='center'>
                            <Card.Img variant="top" src="./assets/comingSoon.jpeg" height='175px'/>
                            <Card.Body>
                                <Card.Title>Create a New Quiz</Card.Title>
                                <Card.Text>
                                Have an idea for a fun new quiz you'd like fellow users to take? Create your own quiz today!
                                </Card.Text>
                                <Button variant="primary">COMING SOON</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-6'>
                        <Card style={{ width: '18rem' }} align='center'>
                        <Card.Img variant="top" src="./assets/take-quiz.jpeg" height='175px'/>
                        <Card.Body>
                            <Card.Title>Take a Quiz</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className=" row d-flex justify-content-around">
                            {/* <Button variant="danger">Random Quiz </Button>  */}
                            <Link to={{pathname: '/home'}}><Button variant="warning">Choose a Quiz </Button> </Link>
                            </div>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className='col-6'>
                        <Card style={{ width: '18rem' }} align='center'>
                        <Card.Img variant="top" src="./assets/past-results.jpeg" height='175px'/>
                        <Card.Body>
                            <Card.Title>Past Results</Card.Title>
                            <Card.Text>
                            Want to relive the glory days of past quizzes? Click here to see results from quizzes you've already taken!
                            </Card.Text>
                            <Button variant="success">Click for Past Quizzes</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className='col-6'>
                        <Card style={{ width: '18rem' }} align='center'>
                        <Card.Img variant="top" src="./assets/share.jpeg" height='175px'/>
                        <Card.Body>
                            <Card.Title>Share a Quiz</Card.Title>
                            <Card.Text>
                            Have a quiz you think is really neat? Share with friends to increase the popularity of your quiz!
                            </Card.Text>
                            <Button variant="info">Grab a Link</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Profile;