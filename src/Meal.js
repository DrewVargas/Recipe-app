import React, { Component } from 'react';

class Meal extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.image} alt={this.props.title} />
        <h4>{Math.ceil(this.props.calories)}</h4>
      </div>
    );
  }
}

export default Meal;
