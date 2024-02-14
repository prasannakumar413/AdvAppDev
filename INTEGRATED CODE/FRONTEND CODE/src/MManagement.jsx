import React, { Component } from "react";
import axios from 'axios';
import './components/Management.css';
import { Link } from 'react-router-dom';
import PPost from './PPost'; // Import the PPost component

class MManagement extends Component {
  state = {
    data: [],
    selectedProduct: null
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://127.0.0.1:8700/get')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleBuyClick = (productId) => {
    const selectedProduct = this.state.data.find(product => product.productId === productId);
    this.setState({ selectedProduct });
  }

  render() {
    return (
      <div>
        <div className="card-container">
          {this.state.data.map(item => (
            <div className="card" key={item.productId}>
              <img src={item.productImage} alt={item.productName} />
              <h3>Product ID: {item.productId}</h3>
              <h3>Product Name: {item.productName}</h3>
              <p>Product Price: {item.productPrice}</p>
              <center>
                <button onClick={() => this.handleBuyClick(item.productId)}>BUY</button>
              </center>
            </div>
          ))}
        </div>
        {this.state.selectedProduct && <PPost product={this.state.selectedProduct} />}
      </div>
    );
  }
}

export default MManagement;
