import React, { Component } from "react";
import './Management.css';
import axios from 'axios';

class Management extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8085/get')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleEditClick = (itemId) => {
    // Handle edit click here, for example, navigate to edit page with the selected item's ID
    console.log(`Edit item with ID: ${itemId}`);
  }

  handleDeleteClick = (itemId) => {
    // Handle delete click here, for example, show a confirmation dialog and then delete the item
    console.log(`Delete item with ID: ${itemId}`);
  }

  render() {   
    return (
      <div className="card-container">
        {this.state.data.map(item => (
          <div className="card" key={item.id}>
            <img src={item.productImage} alt={item.productName} />
            <h3>Product Name: {item.productName}</h3>
            <p>Product Price: {item.productPrice}</p>
            <div className="button-group">
              <button onClick={() => this.handleEditClick(item.id)}>Edit</button>
              <button onClick={() => this.handleDeleteClick(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Management;
