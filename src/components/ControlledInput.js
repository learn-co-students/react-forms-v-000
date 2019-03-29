// Code ControlledInput Component Here
import React, { Component } from 'react';

export default class ControlledInput extends Component {

    state = {
        firstName: "",
        lastName: "Henry"
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.doSomething(this.state)
    }

    render() {
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                 <input type="text" name="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
                 <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
            </form>
        )
    }
}