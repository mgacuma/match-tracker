import { PropsWithChildren, createContext, useContext } from 'react';
import { Amplify } from 'aws-amplify';
import { IAuthContext, useAuthContext } from './hooks/useAuthContext';

Amplify.configure({
	userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
	userPoolWebClientId: import.meta.env.VITE_COGNITO_WEB_CLIENT_ID,
	authenticationFlowType: 'USER_SRP_AUTH',
});

const AuthContext = createContext({} as IAuthContext);

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = (props: PropsWithChildren) => {
	const auth = useAuthContext();
	return <AuthContext.Provider value={auth}>{ props.children }</AuthContext.Provider>;
};