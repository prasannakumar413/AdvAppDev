import React, { useState } from "react";
import * as Components from "./Components";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";

function SSignUp() {
  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({
    gmail: "",
    name: "",
    mobno: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if the password is greater than 6 characters
    if (formData.password.length <= 6) {
      console.error("Password should be greater than 6 characters.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8086/api/v1/auth/register",
        formData
      );
      console.log("Response from server:", response.data);
      // Redirect user or perform actions upon successful registration
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle registration error
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8086/api/v1/auth/authenticate",
        formData
      );
      console.log("Response from server:", response.data);
      // Redirect user or perform actions upon successful login
      if (response.status === 200) {
        // Redirect to "/Uhome"
        window.location.href = "/Uhome";
      }
    } catch (error) {
      console.error("Error signing in:", error);
      // Handle login error
    }
  };

  return (
    <div name="a">
      <Components.Container>
        <center>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form onSubmit={handleSignUp}>
              <Components.Title><h2>Create Account</h2></Components.Title>
              <Components.Input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                color="black"
              />
              <Components.Input
                type="email"
                placeholder="Email"
                name="gmail"
                value={formData.gmail}
                onChange={handleChange}
              />
              <Components.Input
                type="text"
                placeholder="Mobile Number"
                name="mobno"
                value={formData.mobno}
                onChange={handleChange}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form onSubmit={handleSignIn}>
              <Components.Title><h2>SIGN IN</h2></Components.Title>
              <Components.Input
                type="email"
                placeholder="Email"
                name="gmail"
                value={formData.gmail}
                onChange={handleChange}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Components.Anchor href="#">Forgot your password?</Components.Anchor>
              <Components.Button type="submit">Sign In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>QUICK WRAP</Components.Title>
                <Components.Paragraph>
                  Buy Customized Gifts for your Loved Ones 
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>QUICK WRAP</Components.Title>
                <Components.Paragraph>
                Buy Customized Gifts for your Loved Ones
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </center>
      </Components.Container>
    </div>
  );
}

export default SSignUp;
