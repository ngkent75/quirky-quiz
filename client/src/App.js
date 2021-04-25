import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
// import Footer from './components/Footer';
import "./App.css";
import Container from "react-bootstrap/Container";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CreateSignUpForm from "./components/CreateSignUpForm";
import CategoryPage from "./pages/CategoryPage"
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <div>
      <Router>
        <Container>
          <StoreProvider>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/category" component={CategoryPage} />
            <Route exact path="/quiz/:id" component={Quiz} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={SignUpPage} />
            {/* Test route for login */}
            <Route exact path="/loginTest" component={CreateSignUpForm} />
          </StoreProvider>
        </Container>
      </Router>
    </div>
  );
}

export default App;
