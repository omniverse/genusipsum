import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Glossary from './glossary.js';
import TextFields from './textfields.js';

class App extends Component {
  constructor(props) {
    super(props);

    const g = new Glossary();

    this.state = {
      glossary: g.data() //kinda strange, maybe we don't need the Glossary class
    };

    this.updateWordItem = this.updateWordItem.bind(this);
    this.addWordItem = this.addWordItem.bind(this);
    this.deleteWordItem = this.deleteWordItem.bind(this);
    this.setCollectionState = this.setCollectionState.bind(this);
    this.viewJSON = this.viewJSON.bind(this);
  }

  updateWordItem(key, index, word) {
    const words = this.state.glossary[key].slice(0); //clone
    words[index] = word;

    this.setCollectionState(key, words);
  }

  addWordItem(key, word) {
    const words = this.state.glossary[key].slice(0); //clone
    words.push(word);

    this.setCollectionState(key, words);
  }

  deleteWordItem(key, index) {
    const words = this.state.glossary[key].slice(0); //clone
    words.splice(index,1); //remove item
    this.setCollectionState(key, words);
  }

  setCollectionState(key, collection) {
    const changedStuff = {};
    changedStuff[key] = collection;

    this.setState(state => {
      const newGloss = Object.assign({}, state.glossary, changedStuff);
      return { glossary: newGloss };
    });
  }

  viewJSON() {

  }

  render() {
    return (
      <div>
        <h2>Words</h2>
        <TextFields
          items={this.state.glossary[Glossary.WORDS]}
          onUpdate={(index, val) => this.updateWordItem(Glossary.WORDS, index, val)}
          onDelete={(index) => this.deleteWordItem(Glossary.WORDS, index)}
          onAdd={(val) => this.addWordItem(Glossary.WORDS, val)} />
        <h2>Phrases</h2>
        <TextFields
          items={this.state.glossary[Glossary.PHRASES]}
          onUpdate={(index, val) => this.updateWordItem(Glossary.PHRASES, index, val)}
          onDelete={(index) => this.deleteWordItem(Glossary.PHRASES, index)}
          onAdd={(val) => this.addWordItem(Glossary.PHRASES, val)} />
        <h2>Lorem Ipsum</h2>
        <TextFields
          items={this.state.glossary[Glossary.LOREM]}
          onUpdate={(index, val) => this.updateWordItem(Glossary.LOREM, index, val)}
          onDelete={(index) => this.deleteWordItem(Glossary.LOREM, index)}
          onAdd={(val) => this.addWordItem(Glossary.LOREM, val)} />
          <div>
        <a
            name={'json'}
            value={'json'}
            href="glossary.json"
            >View JSON</a>
            <a
                name={'try'}
                value={'try'}
                href="try"
                >Try It</a>
            <a
                name={'view'}
                value={'view'}
                href="ipsum.zip"
                >Get the code</a>
            </div>
    </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
