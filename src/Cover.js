import React, { Component } from 'react';

class Cover extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <div className="cover" onClick={this.handleClick}>
        {this.props.character}
      </div>
    );
  }
}

export default Cover;