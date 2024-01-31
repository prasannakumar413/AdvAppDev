import React from 'react';
import { Link } from "react-router-dom";

const UButtonContainer = () => {
  // Define event handlers
  const handleHomeClick = () => {
    // Logic for handling Home button click
  };

  const handlePlaceOrderClick = () => {
    // Logic for handling Place Order button click
  };

  const handleMyOrderClick = () => {
    // Logic for handling My Order button click
  };

  const handleLogoutClick = () => {
    // Logic for handling Logout button click
  };

  return (
    <div className="button-container" style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={handleHomeClick}
      >
        <Link to="/Uhome" style={linkStyle}>HOME</Link>
      </button>
      <button
        style={buttonStyle}
        onClick={handlePlaceOrderClick}
      >
        <Link to="/placeorder" style={linkStyle}>PLACE ORDER</Link>
      </button>
      <button
        style={buttonStyle}
        onClick={handleMyOrderClick}
      >
        <Link to="/myorder" style={linkStyle}>MY ORDER</Link>
      </button>
      <button
        style={buttonStyle}
        onClick={handleLogoutClick}
      >
        LOGOUT
      </button>
    </div>
  );
};

// CSS styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #4CAF50', // Border style
  borderRadius: '5px',
  padding: '20px', // Increase padding to increase container size
  width: 'fit-content', // Adjust width to fit the content
  height: 'auto', // Increase the height as needed
};

const buttonStyle = {
  padding: '15px 30px', // Increase padding to increase button size
  margin: '0 10px', // Adjust margins as needed
  backgroundColor: '#008CBA', // Change button background color
  color: 'white',
  border: '2px solid #008CBA', // Change button border color
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '18px', // Increase font size for button text
  minWidth: '150px', // Set minimum width for the buttons
  textAlign: 'center', // Center the text inside the button
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default UButtonContainer;
