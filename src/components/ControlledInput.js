import React from 'react';

class ControlledInput extends React.Component {
    state = {
        value: '',
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
         <form onSubmit={event => this.handleSubmit(event)}>
            <input type="text" name="firstName" value={this.state.firstName} />
            <input type="text" name="lastName" value={this.state.lastName} />
            <input type="submit" />
          </form>
          );
    }
}

export default ControlledInput;