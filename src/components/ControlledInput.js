import React from 'react';
 
class ControlledInput extends React.Component {
    handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
      }

  state = {
    value: '',
  }
 
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
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
 
