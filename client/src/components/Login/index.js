import React, { useRef, } from "react";
// import API from "../utils/API";
// import { useAppContext, } from "../../utils/GlobalState";
// import { SET_CURRENT_USER, LOADING } from "../../utils/actions";
import axios from "axios";
import './style.css';

const Login = () => {
  // const { setLoggedIn } = useAppContext();
  const usernameRefL = useRef();
  const passwordRefL = useRef();
  const usernameRefS = useRef();
  const passwordRefS = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = usernameRefL.current.value;
    const password = passwordRefL.current.value;

    // goes to login route
    if (username && password) {
      await axios.post('/api/user/login', { username, password }, { withCredentials: true })
        .then(res => {
          document.location.replace('/')
        })
        .catch(err => console.log(err));
    }

  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const username = usernameRefS.current.value;
    const password = passwordRefS.current.value;

    if (username && password) {
      await axios.post('/api/user', { username, password }, { withCredentials: true })
        .then(res => {
          document.location.replace('/')
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className='container justify-content-center align-items-center log-in'>
      <div className='row'>
        <div className='col-12 md-auto home-card'>
          <h1>Login here:</h1>
          <form className="form-group mt-5 mb-5" onSubmit={handleLogin}>
            <input className="form-control mb-5" required ref={usernameRefL} placeholder="Username" />
            <input className="form-control mb-5" type="password" ref={passwordRefL} placeholder="Password" />
            <button className="btn btn-primary mt-3 mb-5" type="submit">
              Login
          </button>
          </form>
        </div>
        <div className='col-12 md-auto home-card'>
          <h1>Sign up here:</h1>
          <form className="form-group mt-5 mb-5" onSubmit={handleSignup}>
            <input className="form-control mb-5" required ref={usernameRefS} placeholder="Username" />
            <input className="form-control mb-5" type="password" ref={passwordRefS} placeholder="Password" />
            <button className="btn btn-danger mt-3 mb-5" type="submit">
              Sign Up
          </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;