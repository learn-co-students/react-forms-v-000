import React from 'react';

class OriginalForm extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let formData = { 
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    let dataArray = this.state.submittedData.concat(formData);
    this.setState({submittedData: dataArray});
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return (
        <div>
          <span>{data.firstName}</span>
          <span>{data.lastName}</span>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            name="firstName"
            onChange={this.handleFirstNameChange}
            value={this.state.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={this.handleLastNameChange}
            value={this.state.lastName}
          />
          <input
            type="submit"
          />
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default OriginalForm;
