import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TextFields extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  handleChange() {
  };

  render() {
    const wordComponents = this.props.items.map((word, ix) => (
        <input type='text'
          key={ix}
          id={'word-' + ix}
          value={word}
          />
        ));

    return (
      <form autoComplete="off">
        {wordComponents}
      </form>
    );
  }
}

TextFields.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TextFields;
