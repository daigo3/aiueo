import React, { Component } from 'react';

class Character extends Component {
  handleClick() {
    this.props.handleClick(this.props.character);
  }

  render() {
    return (
      <div className="character" onClick={this.handleClick.bind(this)}>
        {this.props.character}
      </div>
    );
  }
}

export default Character;