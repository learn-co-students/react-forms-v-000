// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
    state = {
        value: '',
    }

    handlChange = event => {
        this.setState({
            value: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
    }

    render () {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}></input>
            </form>
        )
    }
}

export default ControlledInput;