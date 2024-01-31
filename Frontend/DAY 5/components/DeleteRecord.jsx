import React, { Component } from 'react';
import axios from 'axios';
import './DeleteRecord.css';

class DeleteRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '', // Changed from recordId to productName
      deletionStatus: null, // To track the status of the deletion
    };
  }

  handleProductNameChange = (event) => {
    this.setState({ productName: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    // Assuming the endpoint is for deleting a record based on productName
    axios
      .delete(`http://127.0.0.1:8085/delete/${this.state.productName}`)
      .then((response) => {
        // Deletion successful, update the status
        this.setState({ deletionStatus: 'success' });
      })
      .catch((error) => {
        // Deletion failed, update the status
        this.setState({ deletionStatus: 'error' });
      });
  };

  render() {
    const { deletionStatus } = this.state;

    return (
      <div className='df'>
        <form onSubmit={this.handleDelete} className="delete-form">
          <label className="delete-label">Product Name</label> {/* Changed label to Product Name */}
          <input
            className="delete-input"
            type="text"
            value={this.state.productName}
            onChange={this.handleProductNameChange}
          />

          <button className="delete-button" type="submit">
            Delete Record
          </button>

          {deletionStatus === 'success' && <p>Deleted successfully!</p>}
          {deletionStatus === 'error' && <p>Deletion failed. Please try again later.</p>}
        </form>
      </div>
    );
  }
}

export default DeleteRecord;
