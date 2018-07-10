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
    }, () => console.log(this.state.value));
  }
 
  render() {
    return (
      <input 
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange} 
      />
    );
  }
}
 
export default ControlledInput;