import React from "react";
import "./Login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isAuthenticated: false, 
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  

  render() {
    
    if (this.state.isAuthenticated) {
      return <Navigate to="/home" />;
    }
    return (
      <div className="container">
        <div className="left-column" style={{ backgroundColor: "#f27157" }}>
          {/* Sign In component */}
          <form onSubmit={this.handleSubmit}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </div>
        <div className="right-column">
          <h4 className="header">GIFT WRAP</h4>
          <p className="paragraph">
            Enter your name, email address, and password to Buy Customized Gifts for your Loved Ones
          </p>
          <button className="sign-in-button">Sign Up</button>
        </div>
      </div>
    );
  }
}

export default SignIn;