// src/components/ControlledInput.js
import React from 'react';
 
class ControlledInput extends React.Component {
  constructor() {
    super();
 
    this.state = {
      value: '',
    };
  }
 
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }
 
  render() {
    return (
    <div>
      Enter Text: <input 
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange} 
      />
    </div>
    );
  }
}
 
export default ControlledInput;