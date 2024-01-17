import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from './Providers/Auth/AuthProvider'
import { router } from './Router/Router'
import { client } from './Providers/Apollo/Client'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthProvider>
			<ApolloProvider client={client}>
				<ChakraProvider>
					<RouterProvider router={router} />
				</ChakraProvider>
			</ApolloProvider>
		</AuthProvider>
	</React.StrictMode>
)
