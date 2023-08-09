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
import { Layout } from './app/Layout/Layout';
import { Amplify } from 'aws-amplify';
import { AuthProvider } from './app/Auth/AuthProvider';
import { Login } from './app/Auth/Login/Login';
import { Signup } from './app/Auth/SignUp/Signup';

const router = createBrowserRouter([
  { element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'tournament/:tournamentId',
        element: <Tournament />,
      },
      {
        path: 'tournament/:tournamentId/event/:eventId',
        element: <Event event='' />
      },
      {
        path: 'tournament/:tournamentId/event/:eventId/phase/:phaseId',
        element: <Phase phase='' />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      }
    ]
  }
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

Amplify.configure({
  userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
  userPoolWebClientId: import.meta.env.VITE_COGNITO_WEB_CLIENT_ID,
  cookieStorage: {
      domain: import.meta.env.VITE_ENV === 'prod' ? import.meta.env.VITE_COGNITO_PROD_DOMAIN : 'localhost',
      path: "/",
      expires: 365,
      sameSite: "strict",
      secure: true,
  },
  authenticationFlowType: "USER_SRP_AUTH",
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>,
)
