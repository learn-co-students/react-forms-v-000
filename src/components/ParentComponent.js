import React from 'react';
import Form from './Form';
import DisplayData from './DisplayData';

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: ""
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

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
        />
        <DisplayData
          formData={this.state}
        />
      </div>
    )
  }
}

export default ParentComponent;