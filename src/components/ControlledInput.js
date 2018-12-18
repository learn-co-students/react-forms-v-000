// Code ControlledInput Component Here
import React, {Component} from 'react';

export default class Form extends Component {
    state = {
      firstName: "John",
      lastName: "Henry"
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }
   
    // handleFirstNameChange = event => {
    //     this.setState({
    //       firstName: event.target.value
    //     })
    //   }
       
    // handleLastNameChange = event => {
    // this.setState({
    //     lastName: event.target.value
    // })
    // }

    render() {
      return (
        <form>
          <input type="text" id="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
          <input type="text" id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        </form>
      )
    }
  }