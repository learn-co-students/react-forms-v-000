// Code ControlledInput Component Here
import React from 'react';

export default class Form extends React.Component {
  state = { firstName: "Beti", lastName: "Schofield" }

  handleFirstNameChange = (event) => {
    this.setState({firstName: event.target.value})
  }

  confirmFirstName = (event) => {
    if (event.target.value !== "Beti") {
      this.setState({firstName: "No! Only Beti!"})
    } else {
      this.handleFirstNameChange(event)
    }
  }

  handleLastNameChange = (event) => {
    this.setState({lastName: event.target.value})
  }

  render(){
    return(
      <div>
        <input type="text" onChange={this.confirmFirstName} value={this.state.firstName} />
        <input type="text" onChange={this.handleLastNameChange} value={this.state.lastName} />
        <div>{this.state.firstName} {this.state.lastName}</div>
      </div>
    )
  }
}
