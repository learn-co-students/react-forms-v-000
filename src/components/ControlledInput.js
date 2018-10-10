// Code ControlledInput Component Here
import React, {Component} from 'react'

export default class Form extends Component {
    state = {
      firstName: "John",
      lastName: "Henry"
    }

    // handleFirstNameChange = event => {
    //     this.setState({
    //       firstName: event.target.value
    //     },()=>console.log("FN change",this.state.firstName));
    // }
       
    // handleLastNameChange = event => {
    //     this.setState({
    //       lastName: event.target.value
    //     })
    // }

    handleChange = event => {
        console.log(event.target.name, event.target.value);
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    render() {
      return (
        <form>
          <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        </form>
      )
    }
  }