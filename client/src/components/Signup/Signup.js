import React, { useRef } from "react";
import { useAppContext, } from "../../utils/GlobalState";
import axios from "axios";

const Signup = () => {
  const { setLoggedIn } = useAppContext();
  const usernameRef = useRef();
  const passwordRef = useRef();
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username && password) {
      await axios.post('/api/user', { username, password }, { withCredentials: true })
        .then(res => {
          setLoggedIn(true);
          document.location.replace('/')
        })
        .catch(err => console.log(err));
    }
    
  };

  return (
    <div>
      <h1>Login here:</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={usernameRef} placeholder="Username" />
        <input className="form-control mb-5" ref={passwordRef} placeholder="Password" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Login
        </button>
      </form>
    </div>
  )
};

export default Login;