// Code ControlledInput Component Here
import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        firstName: "Dudley",
        lastName: "Brown"
    }

    handleChange = (event) => {
        const targetKey = event.target.name;
        const targetValue = event.target.value;
        const toUpdate = { [targetKey]: targetValue }
        
        this.setState(toUpdate);
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
