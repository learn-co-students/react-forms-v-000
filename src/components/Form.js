import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Jon",
      lastName: "Tiede"
    };
  }
  changeFirst = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  changeLast = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={e => this.changeFirst(e)}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={e => this.changeLast(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
