import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { Tournament } from './app/Tournament/Tournament';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Home } from './app/Home/Home';
import { Event } from './app/Tournament/components/Event/Event'
import { Phase } from './app/Tournament/components/Phase/Phase';
import { PhaseModal } from './app/Tournament/components/Phase/components/PhaseModal';

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
  },
  {
    path: 'tournament/:tournamentId/event/:eventId/phase/:phaseId',
    element: <Phase />,
    children: [
      {
        path: 'phaseGroupId/:phaseGroupId',
        element: <PhaseModal />
      }
    ]
  },

  
], {basename: '/match-tracker'})

const httpLink = createHttpLink({
  uri: 'https://api.start.gg/gql/alpha',
});

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_GQL_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "Bearer ",
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
