import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: import.meta.env.VITE_GQL_API_URL,
});
  
const authLink = setContext((_, { headers }) => {
	const token = import.meta.env.VITE_GQL_TOKEN;
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : 'Bearer ',
		}
	};
});

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});