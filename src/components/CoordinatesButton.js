import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleClick = (e) => {
  const data = [e.clientY, e.clientX]

  return this.props.onReceiveCoordinates(data)

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>coordinates</button>
      </div>
    );
  }
}

export default CoordinatesButton;

