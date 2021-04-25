import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usename: "",
      email: "",
      password: "",
    };
  }


  
  // handleSubmit =  async event => {
  //     this.setState({
  //         [event.target.name]
  //     })
  // }
  render() {
    return (
      <div className="container justify-content-center w-50 align-self-center ">
        <div className="wrapper ">
          <form className="form-signin" /*onSubmit={handleSubmit}*/>
            <h2 className="form-signin-heading">Sign Up</h2>
            <input
              type="text"
              className="form-control mb-2"
              name="username"
              placeholder="Username"
              required=""
              // onChange={(event) => setUserName(event.target.value)}
            />
            <input
              type="email"
              className="form-control mb-2"
              name="email"
              placeholder="Email"
              required=""
              // onChange={(event) => setPassword(event.target.value)}
            />

            <input
              type="password"
              className="form-control mb-4"
              name="password"
              placeholder="Password"
              required=""
              // onChange={(event) => setPassword(event.target.value)}
            />

            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;

<>
  <form>
    <h3>Sign Up</h3>

    <div className="form-group">
      <label>Username</label>
      <input type="" text className="form-control" placeholder="Username" />
    </div>
    <div className="form-group">
      <label>Email</label>
      <input type="" text className="form-control" placeholder="Email" />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="" text className="form-control" placeholder="Password" />
    </div>

    <button type="submit" className="btn btn-primary btn-block">
      Sign Up
    </button>
    <p className="text-right">
      Already Registered <a href="#">Sign In?</a>
    </p>
  </form>
</>;
