import React, { useState } from "react";
import PropTypes from "prop-types";

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
    <div class="wrapper">
      <form class="form-signin" onSubmit={handleSubmit}>
        <h2 class="form-signin-heading">Please login</h2>
        <input
          type="text"
          class="form-control"
          name="username"
          placeholder="Username"
          required=""
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
          required=""
          onChange={(event) => setPassword(event.target.value)}
        />
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
