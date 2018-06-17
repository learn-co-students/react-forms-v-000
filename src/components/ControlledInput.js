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
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default ControlledInput;


// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import ControlledInput from './components/ControlledInput';

ReactDOM.render(
  <ControlledInput />,
  document.getElementById('root')
);
