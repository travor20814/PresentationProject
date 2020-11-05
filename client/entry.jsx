// @flow

import React from 'react';
import debug from 'debug';
import { render } from 'react-dom';
import 'moment/locale/zh-tw';

import App from './App';
import {
  client,
} from './global';

debug.enable('Presentation_Project:*');

declare var module: {
  hot: {
    accept: Function,
  },
}

function renderPage() {
  const root = document.getElementById('root');

  if (root) {
    render(
      <App client={client} />,
      root,
    );
  }
}

async function init() {
  if (module.hot) {
    module.hot.accept('./App', () => {
      renderPage();
    });
  }

  renderPage();
}

init();
