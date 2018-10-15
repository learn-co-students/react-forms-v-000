import React from 'react';

export default class ControlledInput extends Component {
    state = {
        value: "",
    }


    // event contains data about the target, whatever the event was triggered on; the input||target has a value attr == input
    // This is NOT the value provided by state; it's by whatever has been entered into input
    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
    }

    //abstracting setState with onChange: merging two methods into one; same attr, name
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
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" 
                    value={this.state.value}
                    onChange={this.handleChange} 
                    />
            </form>
        )
    }
}