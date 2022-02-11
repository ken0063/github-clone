/* eslint-disable no-undef */
import React from 'react';
import {
  NormalizedCacheObject,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const apiKey = localStorage.getItem('api-key');
  if (apiKey != null && typeof apiKey !== 'undefined') {
    return {
      headers: {
        ...headers,
        Authorization: `bearer ${apiKey}`,
      },
    };
  }
});

const client = new ApolloClient<NormalizedCacheObject>({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ApolloRequestClient = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
