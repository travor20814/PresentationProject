// @flow

import React from 'react';
import debug from 'debug';
import { ApolloProvider } from 'react-apollo';
import { hot } from 'react-hot-loader';
import { StyleRoot } from 'radium';
import { Router, MemoryRouter } from 'react-router';
import {
  Switch,
  Route,
} from 'react-router-dom';

// Debug mode
if (process.env.NODE_ENV !== 'production') {
  debug.enable('Presentation_Project:*');
}

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'relative',
    overflow: 'auto',
  },
};

function App({
  history,
  client,
}: any) {
  return (
    <ApolloProvider client={client}>
      <StyleRoot style={styles.root}>
        <MemoryRouter>
          <Router history={history}>
            <Switch>
              <Route path="/" component={null} />
            </Switch>
          </Router>
        </MemoryRouter>
      </StyleRoot>
    </ApolloProvider>
  );
}

export default hot(module)(App);
