import React from 'react';
import { Link } from "react-router-dom";

const ButtonContainer = () => {
  // Define event handlers
  const handleAddGift = () => {
    // Logic for adding a gift
  };

  const handleViewGifts = () => {
    // Logic for viewing gifts
  };

  const handleEditGifts = () => {
    // Logic for editing gifts
  };

  const handleDeleteGifts = () => {
    // Logic for deleting gifts
  };

  const handleViewOrders = () => {
    // Logic for viewing orders
  };

  const handlePaymentHistory = () => {
    // Logic for viewing payment history
  };

  return (
    <div className="button-container" style={containerStyle}>
      <button
        className="action-button"
        onClick={handleAddGift}
        style={buttonStyle}
      >
        <Link to="/Aaddgift" style={linkStyle}>ADD GIFT</Link>
      </button>
      <button
        className="action-button"
        onClick={handleViewGifts}
        style={buttonStyle}
      >
        VIEW GIFT
      </button>
      <button
        className="action-button"
        onClick={handleViewOrders}
        style={buttonStyle}
      >
         <Link to="/vieworders" style={linkStyle}>VIEW ORDERS</Link>
      </button>
      <button
        className="action-button"
        onClick={handlePaymentHistory}
        style={buttonStyle}
      >
        PAYMENT HISTORY
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
  padding: '15px 30px', // Maintain consistent padding for all buttons
  margin: '0 10px', // Maintain consistent margin for all buttons
  backgroundColor: '#008CBA', // Change button background color
  color: 'white',
  border: '2px solid #008CBA', // Change button border color
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '18px', // Maintain consistent font size for all buttons
  minWidth: '150px', // Set minimum width for the buttons
  textAlign: 'center', // Center the text inside the button
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default ButtonContainer;
