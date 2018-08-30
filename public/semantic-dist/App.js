import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Workspace from './Workspace.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false
    }
  }

  createNewSite = () => {
    this.setState({isEditMode: true});
  }

  render() {
    let workArea = (<p className="App-intro">
            <button onClick={this.createNewSite}>Create New Site</button>
            </p>);

    if (this.state.isEditMode) {
      workArea = (<Workspace />);
    };

    return (
      <div className="App ui ">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        {workArea}
      </div>
    );
  }
}

export default App;
