import React from 'react';

class ControlledInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleClick = () => {
    let message = ''
    this.state.value.length > 6 ? message += `${this.state.value} is cool` : message += "The word is too short"
    this.setState({
      message: message,
    })
  }

  render() {
    return (
      <div>
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        /><br/><br/>
        <button onClick={this.handleClick}>Click here</button>
        <p>{this.state.message}</p>
      </div>
    );
  }

}

export default ControlledInput;
