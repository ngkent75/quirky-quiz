import React, { useRef, } from "react";
// import API from "../utils/API";
// import { useAppContext, } from "../../utils/GlobalState";
// import { SET_CURRENT_USER, LOADING } from "../../utils/actions";
import axios from "axios";

const Login = () => {
  // const { setLoggedIn } = useAppContext();
  const usernameRefL = useRef();
  const passwordRefL = useRef();
  const usernameRefS = useRef();
  const passwordRefS = useRef();
  // const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = usernameRefL.current.value;
    const password = passwordRefL.current.value;

    if (username && password) {
      await axios.post('/api/user/login', { username, password }, { withCredentials: true })
        .then(res => {
          // setLoggedIn(true);
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
          // setLoggedIn(true);
          document.location.replace('/')
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <>
      <div>
        <h1>Login here:</h1>
        <form className="form-group mt-5 mb-5" onSubmit={handleLogin}>
          <input className="form-control mb-5" required ref={usernameRefL} placeholder="Username" />
          <input className="form-control mb-5" ref={passwordRefL} placeholder="Password" />
          <button className="btn btn-success mt-3 mb-5" type="submit">
            Login
        </button>
        </form>
      </div>
      <div>
        <h1>Sign up here:</h1>
        <form className="form-group mt-5 mb-5" onSubmit={handleSignup}>
          <input className="form-control mb-5" required ref={usernameRefS} placeholder="Username" />
          <input className="form-control mb-5" ref={passwordRefS} placeholder="Password" />
          <button className="btn btn-success mt-3 mb-5" type="submit">
            Sign Up
        </button>
        </form>
      </div>
    </>
  )
};

export default Login;