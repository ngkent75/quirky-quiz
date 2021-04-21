import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
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
            required=""
            onChange={(event) => setUserName(event.target.value)}
          />

          <input
            type="password"
            className="form-control mb-4"
            name="password"
            placeholder="Password"
            required=""
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </button>
          <p className="text-right mt-2">
            Dont have an account?<a href="/Signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
