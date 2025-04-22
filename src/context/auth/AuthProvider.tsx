import { PropsWithChildren, useReducer, useMemo } from 'react';

import AuthContext from './AuthContext';
import authReducer from './authReducer';

import { AuthState, LoginFormValues, User } from '@interfaces/auth';

const intialState: AuthState = {
    isAuthenticated: false,
    isAuthLoading: false,
    user: null
}

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [ state, dispatch ] = useReducer(authReducer, intialState);

    const setIsAuthLoading = (isAuthLoading: boolean) => {
        dispatch({
            type: '[Auth] - Set isAuthLoading',
            payload: { isAuthLoading }
        });
    }

    const setIsAuthenticated = (isAuthenticated: boolean) => {
        dispatch({
            type: '[Auth] - Set isAuthenticated',
            payload: { isAuthenticated }
        });
    }

    const setUser = (user: User) => {
        dispatch({
            type: '[Auth] - Set user',
            payload: { user }
        });
    }

    const clearAuthState = () => {
        dispatch({ type: '[Auth] - Clear state' });
    }

    const signIn = async (values: LoginFormValues): Promise<void> => {
        setIsAuthLoading(true);

        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values);

        setUser({
            id: 'f52621df-8671-42b7-aae5-8c4fa94c1d8f',
            name: 'Darwin',
            lastname: 'Castro',
            email: values.email
        });

        setIsAuthenticated(true);
        setIsAuthLoading(false);
    }

    const signUp = async (values: { name: string; email: string; password: string }): Promise<void> => {
        setIsAuthLoading(true);

        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Registrando usuario:', values);

        setUser({
            id: 'generated-id',
            name: values.name,
            lastname: '', // Ajusta si tienes este valor en tu formulario
            email: values.email
        });

        setIsAuthenticated(true);
        setIsAuthLoading(false);
    }

    const signOut = (): void => {
        clearAuthState();
    }

    const value = useMemo(() => ({ 
        ...state,
        signIn,
        signUp,
        signOut,
    }), [ state ]);

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
