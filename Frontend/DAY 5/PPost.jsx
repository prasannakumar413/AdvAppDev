import React, { Component } from 'react';
import './PPost.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: '',
      mobileNumber: '',
      successMessage: '',
    };
  }

  handleProductNameChange = (event) => {
    this.setState({ productName: event.target.value });
  };

  handleProductPriceChange = (event) => {
    this.setState({ productPrice: event.target.value });
  };

  handleMobileNumberChange = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      productName: this.state.productName,
      productPrice: this.state.productPrice,
      mobileNumber: this.state.mobileNumber,
    };

    axios
      .post('http://127.0.0.1:8085/add', data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ successMessage: 'Product Added Successfully' });
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
          <label className="post-label">Product Name</label>
          <input
            className="post-input"
            type="text"
            value={this.state.productName}
            onChange={this.handleProductNameChange}
          />

          <label className="post-label">Product Price</label>
          <input
            className="post-input"
            type="text"
            value={this.state.productPrice}
            onChange={this.handleProductPriceChange}
          />

          <label className="post-label">Mobile Number</label>
          <input
            className="post-input"
            type="text"
            value={this.state.mobileNumber}
            onChange={this.handleMobileNumberChange}
          />
 <center>
          <button className="post-button" type="submit">
            PURCHASE GIFT
          </button></center>

          <Link to="/Uhome">
           <center> <button className="post-back-button" type="submit">
              BACK
            </button></center>
          </Link>
        </form>
      </div>
    );
  }
}

export default PPost;
