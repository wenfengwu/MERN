import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }

  plusAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        <div>
          <h1>
            {this.props.firstName}, {this.props.lastName}
          </h1>
          <p>age: {this.state.age}</p>
          <p>Hair Color: {this.props.hairColor}</p>
          <button onClick={this.plusAge}>
            Birthday Button for {this.props.firstName}, {this.props.lastName}
          </button>
        </div>
      </div>
    );
  }
}

export default PersonCard;
