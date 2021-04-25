import React, { useRef } from "react";
// import PropTypes from "prop-types";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_USER, LOADING } from "../../utils/actions";
import API from "../../utils/API";

import "./style.css";

function LoginUser() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [state, dispatch] = useStoreContext;

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: LOADING });
    API.saveUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_USER,
          post: result.data,
        });
      })
      .catch((err) => console.log(err));

    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className="container justify-content-center w-50 align-self-center ">
      <div className="wrapper ">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h2 className="form-signin-heading">Please Login</h2>
          <input
            type="text"
            className="form-control mb-2"
            name="username"
            placeholder="Username"
            required
            ref={usernameRef}
          />

          <input
            type="password"
            className="form-control mb-4"
            name="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={state.loading}
          >
            Login
          </button>
          <p className="text-right mt-2">
            Dont have an account?<a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
