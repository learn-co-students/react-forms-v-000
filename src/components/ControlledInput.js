import React, { Component } from 'react'

export default class ControlledInput extends Component {

    state = {
        username: "",
        password: "",
        tweet: "",
        remaining: 140,
    }

    isValid = {
        border: "1px solid green",
    }

    isInvalid = {
        border: "1px solid red",
    }

    // how do you properly use the constraint validation API with React?
    // how do you make stuff appear invalid after submit?

    handleInput = (e) => {
        // If it's the tweet, check it's length
        console.log(e.target.name, e.target.value)
        if(e.target.name === "tweet"){
            this.setState({
                tweet: e.target.value,
                remain: this.state.remain - parseInt(e.target.value.length, 10),
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Check  validity
    }

    render() {
        return (
            <form>
                <label htmlFor="username">Username
                    <input
                        autoComplete="username"
                        //className={valid ? this.isValid : null}
                        id="username"
                        name="username"
                        onChange={this.handleInput}
                        required
                        type="text"
                        value={this.state.username}
                    />
                </label>
                <label htmlFor="password">Password
                    <input
                        autoComplete="current-password"
                        //className={valid ? this.isValid : null}
                        id="password"
                        name="password"
                        onChange={this.handleInput}
                        required
                        type="password"
                        value={this.state.password}
                    />
                </label>
                <label htmlFor="tweet">Message
                    <input
                        autoComplete="no"
                        //className={valid ? this.isValid : null}
                        id="tweet"
                        name="tweet"
                        onChange={this.handleInput}
                        type="text"
                        value={this.state.tweet}
                    />
                    <span> {this.state.remaining}</span>
                </label>
                <label htmlFor="submit">
                    <button 
                        id="submit"
                        name="submit"
                        type="submit"
                    >
                        Submit
                    </button>
                </label>
            </form>
        )
    }
}
