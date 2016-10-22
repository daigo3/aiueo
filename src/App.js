import React, { Component } from 'react';
import './App.css';

import attachFastClick from 'fastclick';

import Row from './Row';
import Cover from './Cover';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      char : ''
    };

    this.getCharacters = this.getCharacters.bind(this);
    this.showCharacter = this.showCharacter.bind(this);
    this.hideCharacter = this.hideCharacter.bind(this);
  }

  componentDidMount() {
    attachFastClick(document.body);
  }

  getCharacters() {
    const chars = [
      ['あ','い','う','え','お'],
      ['か','き','く','け','こ'],
      ['さ','し','す','せ','そ'],
      ['た','ち','つ','て','と'],
      ['な','に','ぬ','ね','の'],
      ['は','ひ','ふ','へ','ほ'],
      ['ま','み','む','め','も'],
      ['や','ゆ','よ'],
      ['ら','り','る','れ','ろ'],
      ['わ','を','ん']
    ];

    return chars.map((row, i) => {
      return (
        <Row key={i} chars={row} showCharacter={this.showCharacter} />
      );
    });
  }

  hideCharacter() {
    this.setState({ char: '' });
  }

  showCharacter(char) {
    this.setState({ char });
  }

  render() {
    const chars = this.getCharacters();
    return (
      <div className="App">
        { this.state.char !== '' &&
          <Cover character={this.state.char} handleClick={this.hideCharacter} />}
        {chars}
      </div>
    );
  }
}

export default App;
