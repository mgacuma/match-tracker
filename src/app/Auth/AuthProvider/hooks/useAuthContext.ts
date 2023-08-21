import { CognitoUser, CognitoUserSession } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';

export interface IAuthContext {
    isLoading: boolean;
    isAuthenticated: boolean;
    user: CognitoUser | any;
    signIn: (username: string, password: string) => Promise<Result>;
    signUp: (username: string, password: string, attributes?: object) => Promise<Result>;
    signOut: () => void;
    currentSession: () => Promise<CognitoUserSession>;
}

export const useAuthContext = (): IAuthContext => {
	const [isLoading, setIsLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then((result) => {
				setUser(result);
				setIsAuthenticated(true);
				setIsLoading(false);
			})
			.catch(() => {
				setUser({});
				setIsAuthenticated(false);
				setIsLoading(false);
			});
	}, []);

	const signIn = async (username: string, password: string) => {
		try {
			const result = await Auth.signIn(username, password);
			setUser(result);
			setIsAuthenticated(true);
			return { success: true };
		} catch (error: any) {
			console.log(error);
			return {
				success: false,
				type: error.name,
				message: error.message,
			};
		}
	};

	const signUp = async (username: string, password: string, attributes?: object) => {
		try{
			const result = await Auth.signUp({username, password, attributes});
			return { success: true };
		} catch (error: any) {
			return {
				success: false,
				type: error.name,
				message: error.message,
			};
		}
	};

	const signOut = async () => {
		try {
			setIsLoading(true);            
			await Auth.signOut();
			setUser({});
			setIsAuthenticated(false);
			setIsLoading(false);
			return { success: true };
		} catch (error: any) {
			return {
				success: false,
				type: error.name,
				message: error.message,
			};
		}
	};

	const currentSession = async () => {
		const session = await Auth.currentSession();
		return session;
	};

	return {
		isLoading,
		isAuthenticated,
		user,
		signIn,
		signUp,
		signOut,
		currentSession
	};
};

interface Result {
    success: boolean;
    type?: string;
    message?: string;
}