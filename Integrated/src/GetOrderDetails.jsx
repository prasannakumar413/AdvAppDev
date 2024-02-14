import axios from "axios";
import React, { Component } from "react";
import './GetOrderDetails.css';

class GetOrderDetails extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8700/getp')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>Purchase ID</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.purchaseId}>
              <td>{item.purchaseId}</td>
              <td>{item.productId}</td>
              <td>{item.productName}</td>
              <td>{item.productPrice}</td>
              <td>{item.mobileNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default GetOrderDetails;
