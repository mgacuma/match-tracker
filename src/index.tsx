import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from './app/Auth/AuthProvider/AuthProvider';
import { router } from './app/Router/Router';
import { client } from './app/Apollo/Client';

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
