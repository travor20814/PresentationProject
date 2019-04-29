// @flow
/* eslint no-underscore-dangle: 0, no-console: 0 */
import 'cross-fetch/polyfill';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory/lib/inMemoryCache';
import { ApolloLink } from 'apollo-link';
// import jwtDecode from 'jwt-decode';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({
  uri: `${API_HOST}/graphql`,
});

export function createClient() {
  const cache = new InMemoryCache();

  const authMiddleware = new ApolloLink((operation, forward) => {
    const headers = {};

    const token = localStorage.getItem('accessToken') || null;

    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    operation.setContext({
      headers,
    });

    return forward(operation);
  });

  const client = new ApolloClient({
    link: ApolloLink.from([
      authMiddleware,
      httpLink,
    ]),
    cache,
    dataIdFromObject: o => `${o.id}${o.__typename}`,
  });

  return client;
}

export default createClient;
