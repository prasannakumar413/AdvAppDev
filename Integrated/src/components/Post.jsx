import React, { Component } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      productImage: '',
      productName: '',
      productPrice: '',
      successMessage: '',
    };
  }

  handleProductIdChange = (event) => {
    this.setState({ productId: event.target.value });
  };

  handleProductImageChange = (event) => {
    this.setState({ productImage: event.target.value });
  };

  handleProductNameChange = (event) => {
    this.setState({ productName: event.target.value });
  };

  handleProductPriceChange = (event) => {
    this.setState({ productPrice: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      productId: this.state.productId,
      productImage: this.state.productImage,
      productName: this.state.productName,
      productPrice: this.state.productPrice,
    };

    axios
      .post('http://127.0.0.1:8700/add', data)
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
      <div>
        {this.state.successMessage && <p>{this.state.successMessage}</p>}

        <form onSubmit={this.handleSubmit} className="sign-form">
          <label className="sign-label">Product ID</label>
          <input
            className="sign-input"
            type="text"
            value={this.state.productId}
            onChange={this.handleProductIdChange}
          />

          <label className="sign-label">Product Image URL</label>
          <input
            className="sign-input"
            type="text"
            value={this.state.productImage}
            onChange={this.handleProductImageChange}
          />

          <label className="sign-label">Product Name</label>
          <input
            className="sign-input"
            type="text"
            value={this.state.productName}
            onChange={this.handleProductNameChange}
          />

          <label className="sign-label">Product Price</label>
          <input
            className="sign-input"
            type="text"
            value={this.state.productPrice}
            onChange={this.handleProductPriceChange}
          />

          <button className="login-button" type="submit">
            ADD GIFT
          </button>

          <Link to="/Ahome">
            <button className="back5" type="submit">
              BACK
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Post;
