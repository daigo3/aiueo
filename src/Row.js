import React, { Component } from 'react';
import Character from './Character';

class Row extends Component {
  render() {
    let chars = this.props.chars.map((char, i) => {
      return <Character
        key={i}
        character={char}
        handleClick={this.props.showCharacter}/>;
    });

    return (
      <div className="row">
        {chars}
      </div>
    );
  }
}

export default Row;