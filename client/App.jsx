// @flow

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import MainBoard from './Pages/Main/MainBoard';

function App({
  client,
}: any) {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <MainBoard />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default hot(App);
