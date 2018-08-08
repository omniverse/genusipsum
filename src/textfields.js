import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TextFields extends Component {

  constructor(props) {
    super(props);
  }

  handleChange() {
  };

  render() {
    const wordComponents = this.props.items.map((word, ix) => (
        <div>
        <input type='text'
          key={ix}
          id={'word-' + ix}
          value={word}
          size={(word && word.length > 24 ? word.length : 24)}
          onChange={(evt) => {this.props.onUpdate(ix, evt.target.value)}}
          />
        <button
          name={'word-remove-' + ix}
          value={'word-remove-' + ix}
          onClick={(evt) => {evt.preventDefault(); this.props.onDelete(ix)}}
          >remove</button>
          </div>
        ));

    return (
      <form autoComplete="off">
        {wordComponents}
        <div>
        <button
          name={'word-add'}
          value={'word-add'}
          onClick={(evt) => {evt.preventDefault(); this.props.onAdd()}}
          >add word</button>
          </div>
    </form>
    );
  }
}

TextFields.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TextFields;
