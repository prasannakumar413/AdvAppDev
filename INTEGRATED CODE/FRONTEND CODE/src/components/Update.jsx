/** 
import React, { Component } from 'react';
import './Update.css';
import axios from 'axios';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      productName: '',
      productImage: '',
      productPrice: '',
    };
  }

  handleProductIdChange = (event) => {
    this.setState({ productId: event.target.value });
  };

  handleProductNameChange = (event) => {
    this.setState({ productName: event.target.value });
  };

  handleProductImageChange = (event) => {
    this.setState({ productImage: event.target.value });
  };

  handleProductPriceChange = (event) => {
    this.setState({ productPrice: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      productId: this.state.productId,
      productName: this.state.productName,
      productImage: this.state.productImage,
      productPrice: this.state.productPrice,
    };

  axios
    
      .then((response) => {
        console.log('Update successful');
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Product ID</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.productId}
          onChange={this.handleProductIdChange}
        />

        <label className="sign-label">Product Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.productName}
          onChange={this.handleProductNameChange}
        />

        <label className="sign-label">Product Image (URL)</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.productImage}
          onChange={this.handleProductImageChange}
        />

        <label className="sign-label">Product Price</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.productPrice}
          onChange={this.handleProductPriceChange}
        />

        <button className="update-button" type="submit">
          Update
        </button>
      </form>
    );
  }
}

export default Update;

**/
