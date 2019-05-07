import React, { Component } from 'react';

export default class Profile extends Component {
  contructor() {

  }

  render() {
    return (
      <div>
        <li>{this.props.firstName} {this.props.lastName}</li>
      </div>
    )
  }
}
