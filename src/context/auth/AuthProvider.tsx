import { PropsWithChildren, useReducer, useMemo, useEffect } from 'react';
import { useRouter } from 'expo-router';

import AuthContext from './AuthContext';
import authReducer from './authReducer';

import { AuthState, LoginFormValues, User } from '@interfaces/auth';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '@config/firebase';

const intialState: AuthState = {
    isAuthenticated: false,
    isAuthLoading: true, // Cambiar a true para mostrar loading al inicio
    user: null
}

const AuthProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(authReducer, intialState);
    const router = useRouter();

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

    useEffect(() => {
        setIsAuthLoading(true); // Inicia loading
        const unsubscribe = onAuthStateChanged(firebaseAuth, (firebaseUser) => {
            if (firebaseUser) {
                setUser({
                    id: firebaseUser.uid,
                    fullName: firebaseUser.displayName || '',
                    email: firebaseUser.email || ''
                });
                setIsAuthenticated(true);
            } else {
                clearAuthState();
            }
            setIsAuthLoading(false); // Termina loading después de verificar
        });
        return unsubscribe;
    }, []);

    const signIn = async (values: LoginFormValues): Promise<void> => {
        setIsAuthLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, values.email, values.password);
            setUser({
                id: userCredential.user.uid,
                fullName: userCredential.user.displayName || '',
                email: userCredential.user.email || values.email
            });
            setIsAuthenticated(true);
        } catch (error: any) {
            let message = 'Error al iniciar sesión';
            if (error.code === 'auth/user-not-found') message = 'Correo no registrado';
            if (error.code === 'auth/wrong-password') message = 'Contraseña incorrecta';
            if (error.code === 'auth/invalid-credential') message = 'Correo o contraseña incorrectos';
            alert(message);
        }
        setIsAuthLoading(false);
    }

    const signUp = async (values: { fullName: string; email: string; password: string }): Promise<void> => {
        try {
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, values.email, values.password);
            await updateProfile(userCredential.user, {
                displayName: values.fullName,
            });
            // No autenticamos ni seteamos usuario aquí, solo registro
        }
        catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                alert('El correo ya está registrado. Usa otro o inicia sesión.');
            } else {
                alert('Error al registrar usuario');
            }
        }
    }

    const signOut = async (): Promise<void> => {
        await firebaseSignOut(firebaseAuth);
        clearAuthState();
    }

    const value = useMemo(() => ({
        ...state,
        signIn,
        signUp,
        signOut,
    }), [state]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
