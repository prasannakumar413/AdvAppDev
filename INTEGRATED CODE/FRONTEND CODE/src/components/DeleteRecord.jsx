/*
import React, { Component } from "react";
import './Management.css';
import axios from 'axios';

class Management extends Component {
  state = {
    data: []
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
  handleEditClick = (productId) => {
    console.log(`Edit item with ID: ${productId}`);
    // Handle edit logic here, e.g., redirect to edit page with productId
    // You need to implement the logic according to your application
    // For now, let's assume you want to update the product name
    const newName = prompt("Enter the new name for the product:");
    if (newName) {
      axios.put('http://127.0.0.1:8700/update', { productId, newName })
        .then(response => {
          console.log(response.data);
          // After successful edit, fetch data again to update the view
          this.fetchData();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  handleDeleteClick = (productId) => {
    console.log(`Delete item with ID: ${productId}`);
    // Handle delete logic here, e.g., show confirmation dialog and delete item
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .then(response => {
          console.log(response.data);
          // After successful delete, fetch data again to update the view
          this.fetchData();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {   
    return (
      <div className="card-container">
        {this.state.data.map(item => (
          <div className="card" key={item.productId}>
            <img src={item.productImage} alt={item.productName} />
            <h3>Product ID: {item.productId}</h3>
            <h3>Product Name: {item.productName}</h3>
            <p>Product Price: {item.productPrice}</p>
            <div className="button-group">
              <button onClick={() => this.handleEditClick(item.productId)}>Edit</button>
              <button onClick={() => this.handleDeleteClick(item.productId)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Management;
*/
