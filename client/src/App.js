import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import './App.css';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Header />
      <Container>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/home' component={Homepage}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/quiz' component={Quiz}/>
      </Container>

      <Footer />
    </div>
  </Router>
  );
}

export default App;
