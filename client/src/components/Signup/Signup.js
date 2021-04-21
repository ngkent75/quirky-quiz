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
      <>
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type=""
              text
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="" text className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type=""
              text
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="text-right">
            Already Registered <a href="#">Sign In?</a>
          </p>
        </form>
      </>
    );
  }
}
export default Signup;
