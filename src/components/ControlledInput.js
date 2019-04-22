// Code ControlledInput Component Here
import React from 'react';

export default class ControlledInput extends React.Component {
    state = {
        value: '',
    }
    /*
    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value,
        });
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        });
    }
    */
    // the previous two functions are similar. Let's DRY up our program
    // ...
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // here, we'll be utilizing controlled forms to save the value to save the 
    // value and update our State
    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
        // like a condensed .post() jQuery request
    }

    render() {
        return (
            // we can utilize onSubmit similarly to a state change as shown above
            // the event is this obj we're sending
            <form onSubmit={event => this.handleSubmit(event)}>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}