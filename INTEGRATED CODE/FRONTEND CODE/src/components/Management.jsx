import React, { Component } from "react";
import './Management.css';
import axios from 'axios';

class Management extends Component {
  state = {
    data: [],
    editedPrice: {} // Track edited prices
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://127.0.0.1:8700/get')
      .then(response => {
        this.setState({ 
          data: response.data,
          editedPrice: response.data.reduce((acc, item) => {
            acc[item.productId] = item.productPrice;
            return acc;
          }, {})
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDeleteClick = (productId) => {
    console.log(`Delete item with ID: ${productId}`);
    // Handle delete logic here, e.g., show confirmation dialog and delete item
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`http://127.0.0.1:8700/delete/${productId}`)
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

  handleEditClick = (productId) => {
    const newPrice = prompt("Enter the new price:");
    if (newPrice !== null) {
      this.setState(prevState => ({
        editedPrice: {
          ...prevState.editedPrice,
          [productId]: newPrice
        }
      }), () => {
        // After updating state, send PUT request to update the price in the backend
        this.handleSaveClick(productId, newPrice);
      });
    }
  }

  handleSaveClick = (productId, updatedPrice) => {
    // Send PUT request to update the price on the server
    axios.put(`http://127.0.0.1:8700/updatePrice/${productId}/${updatedPrice}`)
      .then(response => {
        console.log(response.data);
        // Fetch data again to update the view
        this.fetchData();
      })
      .catch(error => {
        console.log('Error updating price:', error);
        // Handle error here, such as displaying an error message to the user
      });
  }

  render() {
    return (
      <div className="card-container">
        {this.state.data.map(item => (
          <div className="card" key={item.productId}>
            <img src={item.productImage} alt={item.productName} />
            <h3>Product ID: {item.productId}</h3>
            <h3>Product Name: {item.productName}</h3>
            <p>Product Price: {this.state.editedPrice[item.productId] !== undefined ? this.state.editedPrice[item.productId] : item.productPrice}</p>
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
