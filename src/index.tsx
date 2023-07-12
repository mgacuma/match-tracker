import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { Tournament } from './app/Tournament/Tournament';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Home } from './app/Home/Home';
import { Event } from './app/Tournament/components/Event/Event'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'tournament/:tournamentId',
    element: <Tournament />,
  },
  {
    path: 'tournament/:tournamentId/event/:eventId',
    element: <Event />
  }
  
], {basename: '/match-tracker'})

const httpLink = createHttpLink({
  uri: 'https://api.start.gg/gql/alpha',
});

const authLink = setContext((_, { headers }) => {
  const token = '6c09c09737ba4f7f30d53085c91f8b97'
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
