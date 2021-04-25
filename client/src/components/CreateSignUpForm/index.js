import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_USER, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreateSignUpForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_USER,
          user: result.data
        });
      })
      .catch(err => console.log(err));

    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div>
      <h1>Sign up here:</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={usernameRef} placeholder="Username" />
        <input className="form-control mb-5" ref={passwordRef} placeholder="Password" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
};

export default CreateSignUpForm;