import React, { Component } from 'react';
import WordList from './WordList.js';

class Workspace extends Component {

  state = {
    words: [''],
    latin: ['']
  }

  onNewWord = (collection) => {
    const newState = {};
    newState[collection] = this.state[collection].slice(0);
    newState[collection].push('');
    this.setState(Object.assign(this.state, newState));
  };

  onRemoveWord = (collection, ix) => {
    console.log(ix);
    const newState = {};
    newState[collection] = this.state[collection].slice(0);
    newState[collection].splice(ix,1);
    console.log(newState[collection]);
    this.setState(Object.assign(this.state, newState));
  };

  onUpdateWords = (ix, val) => {
    console.log(ix, val);
    const words = this.state.words.slice(0);
    words[ix] = val;
    this.setState(Object.assign(this.state, { words }));
  };

  onUpdateLatin = (ix, val) => {
    const latin = this.state.latin.slice(0);
    latin[ix] = val;
    this.setState(Object.assign(this.state, { latin }));
  };

  render() {
    return (
      <div className="Workspace">
        <WordList id='words' key='words' words={this.state.words}
          placeholderText='word or phrase' headerText={'Now some words and phrases'}
          onUpdate={this.onUpdateWords} onNewWord={() => this.onNewWord('words')} onRemoveWord={(ix) => this.onRemoveWord('words', ix)}
        />
        <WordList id='latin' key='latin' words={this.state.latin}
          placeholderText='Latine verbum vel sententia' headerText={'Optionally change the default latin'}
          onUpdate={this.onUpdateLatin} onNewWord={() => this.onNewWord('latin')} onRemoveWord={(ix) => this.onRemoveWord('latin', ix)}
        />
      </div>
    );
  }
}

export default Workspace;
