import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import Header from './components/Header';
// import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div>
    <Router>
      <h1>Hello</h1>
      <Navigation />
      <Header />
      <Container>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/home' component={Homepage}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/quiz' component={Quiz}/>
       </Container>
    </Router>
    </div>
  );
}

export default App;
