// Code ControlledInput Component Here
import React, { Component } from 'react';

class ControlledInput extends Component {


    this.state = {
      value: '',
    };
  }


  render() {
    return (
      <input type="text" value={this.state.value}/>
    );
  }
}

export default ControlledInput;