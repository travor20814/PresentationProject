// @flow
/* eslint global-require: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';
import {
  history,
  client,
} from './global.js';

(async () => {
  const root = document.getElementById('root');

  if (root) {
    ReactDOM.render(
      <AppContainer>
        <App history={history} client={client} />
      </AppContainer>,
      root,
    );
  }
})();
