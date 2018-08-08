import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from '../src/app';
import CssBaseline from '@material-ui/core/CssBaseline';

function CSS() {
  return (
    <React.Fragment>
      <CssBaseline />
    </React.Fragment>

  )
}

ReactDOM.render(
  <CSS />,
  document.querySelector('head')
)

const rootElement = document.querySelector('#main');
if (rootElement) {
  render(<App />, rootElement);
}
