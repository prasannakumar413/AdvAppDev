import React, { Component } from 'react';
import './PPost.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseId: '',
      productId: props.product.productId,
      productName: props.product.productName,
      productPrice: props.product.productPrice,
      mobileNumber: '', 
      successMessage: '',
    };
  }

  handlePurchaseIdChange = (event) => {
    this.setState({ purchaseId: event.target.value });
  };

  handleMobileNumberChange = (event) => {
    this.setState({ mobileNumber: event.target.value }); // Update mobile number state
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      purchaseId: this.state.purchaseId,
      productId: this.state.productId,
      productName: this.state.productName,
      productPrice: this.state.productPrice,
      mobileNumber: this.state.mobileNumber, // Include mobile number in data sent to the server
    };

    axios
      .post('http://127.0.0.1:8700/addp', data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ successMessage: 'Product Purchased Successfully' });
        }
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  render() {
    return (
      <div className="post-container">
        {this.state.successMessage && <p>{this.state.successMessage}</p>}

        <form onSubmit={this.handleSubmit} className="post-form">
          <label className="post-label">Purchase Id</label>
          <input
            className="post-input"
            type="text"
            value={this.state.purchaseId}
            onChange={this.handlePurchaseIdChange}
          />

          <label className="post-label">Product Id</label>
          <input
            className="post-input"
            type="text"
            value={this.state.productId}
            readOnly
          />

          <label className="post-label">Product Name</label>
          <input
            className="post-input"
            type="text"
            value={this.state.productName}
            readOnly
          />

          <label className="post-label">Product Price</label>
          <input
            className="post-input"
            type="text"
            value={this.state.productPrice}
            readOnly
          />

          {/* Mobile Number Input Field */}
          <label className="post-label">Mobile Number</label>
          <input
            className="post-input"
            type="text"
            value={this.state.mobileNumber}
            onChange={this.handleMobileNumberChange} // Handle changes to mobile number input
          />

          <center>
            <button className="post-button" type="submit">
              PURCHASE GIFT
            </button>
          </center>

          <Link to="/Uhome">
            <center>
              <button className="post-back-button" type="submit">
                BACK
              </button>
            </center>
          </Link>
        </form>
      </div>
    );
  }
}

export default PPost;
