// Code ControlledInput Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class ControlledInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

handleChange = event => {
  this.setState({
    value: event.target.value
  });
}

render() {
  return(
    <input type="text"
    value={this.state.value}
    onChange={this.handleChange}
    />
  );
}


}

export default ControlledInput;

import ControlledInput from './compoments/ControlledInput';

ReactDOM.render(
  <ControlledInput />,
  document.getElementById('root')
);
