import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    }, () => console.log(this.state.value));

  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit"></input>
        </form>
        <div>{this.state.value}</div>
      </div>
    );
  }
}

export default ControlledInput;
