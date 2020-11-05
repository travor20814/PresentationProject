// @flow

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import { FloatingContainerContext } from './Constants/context';
import MainBoard from './Pages/Main/MainBoard';

function App({
  client,
}: any) {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <FloatingContainerContext.Provider value={document.getElementById('portal-container')}>
          <Switch>
            <Route path="/">
              <MainBoard />
            </Route>
          </Switch>
        </FloatingContainerContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default hot(App);
