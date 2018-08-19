// Code ControlledInput Component Here
import React from 'react';
 
class ControlledInput extends React.Component {
  state = {
    value: '',
  }
 
 // Function to handle the change of the input
  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      value: event.target.value,
    });
  }
 
    // Function for handling the form submission -- includes ALL form state values
    handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
    }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
 
export default ControlledInput;
