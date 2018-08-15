import React from 'react';

export default class ControlledInput extends React.Component {
  state = {
    value: '',
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }
  
    render() {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" value={this.state.firstName}  onChange={this.handleChange}/>
          <input type="text" name="lastName" value={this.state.lastName}  onChange={this.handleChange} />
        </form>
      );
    }
  }
//Form elements include `<input>`, `<textarea>`, `<select>`, and `<form>` itself.
// When we talk about inputs in this lesson, we broadly mean the form elements
// (`<input>`, `<textarea>`, `<select>`) and not always specifically just
// `<input>`.
//
// To control the value of these inputs, we use a prop specific to that type of input:
//
// - For `<input>` and `<textarea>`, we use `value`, as we have seen.
//
// - For `<input type="checkbox">` and `<input type="radio">`, we use `checked`
//
// - For `<option>`, we use `selected`
//
// Each of these attributes can be set based on a state value. Each also has an
// `onChange` event listener, allowing us to update state when a user interacts
// with a form.
