import React, { Component } from 'react';
import './App.css';
import Workspace from './Workspace.js'

class App extends Component {

  state = {
    isEditMode: false
  }

  doEditMode = () => {
    this.setState(Object.assign(this.state, {isEditMode: true}));
  }

  createButtonSnippet = () => {
    return (
      <p className="App-intro">
        <button id="create" onClick={this.doEditMode}>Create a New Site</button>
      </p>
    );
  }

  render() {
    const content = (this.state.isEditMode?(<Workspace />):this.createButtonSnippet());

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Carpe Ipsum</h1>
        </header>
        {content}
      </div>
    );
  }
}

export default App;
