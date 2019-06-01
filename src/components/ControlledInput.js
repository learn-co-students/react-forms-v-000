import React, { Component } from 'react'

export default class ControlledInput extends Component {
    state = {
        firstName:"Kyle",
        lastName:"Hughes"
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form target="/createUser">
                    <input id="firstName"
                           onChange={event => this.handleChange(event)}
                           type="text"
                           value={this.state.firstName}
                           name="firstName" />
                    <input id="lastName"
                           onChange={event => this.handleChange(event)}
                           type="text"
                           value={this.state.lastName}
                           name="lastName" />
                </form>
                <span>My name is {this.state.firstName} {this.state.lastName}!</span>
            </div>
        )
    }
}