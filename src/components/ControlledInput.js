import React from 'react';

class ControlledInput extends React.Component {
    constructor() {
        super();
        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(event) {
        this.setState({ value: event.target.value});

    }
    handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ControlledInput;
