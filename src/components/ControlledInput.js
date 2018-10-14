import React from 'react';

export default class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = (event) =>{
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.sendFormData(this.state)
  }

  sendFormData= () => {
    console.log("send Form submitted")
  }

  render(){
    return(
      <form
        onSubmit={event => this.handleSubmit(event)}
      >
        <input 
          type="text"
          placeholder="your text here"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}