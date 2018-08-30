import React, { Component } from 'react';

class WordList extends Component {

  render() {
    const wordElements = this.props.words.map((val, ix) => {
      console.log('render', val, ix);
      return (<div className="column" key={this.props.id + '-' + ix} id={this.props.id + '-' + ix}>
                <input type='text' className="ui segment" placeholder={this.props.placeholderText} value={val} onChange={(evt) => this.props.onUpdate(ix, evt.target.value)} />
                <button
                  className='ui content basic button icon'
                  onClick={() => this.props.onRemoveWord(ix)}
                >
                  <i className='minus icon' />
                </button>
              </div>);
    });

    return (
      <div className="wordlist">
        <h3 className="ui center aligned header">{this.props.headerText}</h3>
        <div className="ui two column stackable grid">
        {wordElements}
          <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={this.props.onNewWord}
          >
            <i className='plus icon' />
          </button>
        </div>
      </div>
    </div>
    );
  }
}

export default WordList;
