import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>
            {this.props.firstName}, {this.props.lastName}
          </h1>
          <p>age: {this.props.age}</p>
          <p>Hair Color: {this.props.hairColor}</p>
        </div>
      </div>
    );
  }
}

export default PersonCard;
