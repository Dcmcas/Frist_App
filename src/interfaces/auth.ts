export interface LoginFormValues {
    email: string;
    password: string;
}

export interface User {
    id: string;
    fullName?: string; // Cambiado a un solo campo
    email: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    isAuthLoading: boolean;
    user: User | null;
}

export type AuthAction = 
    { type: '[Auth] - Set isAuthenticated', payload: { isAuthenticated: boolean } }
    | { type: '[Auth] - Set isAuthLoading', payload: { isAuthLoading: boolean } }
    | { type: '[Auth] - Set user', payload: { user: User } }
    | { type: '[Auth] - Clear state' }

export interface AuthContextProps extends AuthState {
    signIn: (values: LoginFormValues) => Promise<void>;
    signUp: (values: { fullName: string; email: string; password: string }) => Promise<void>; // Cambiado a un solo campo
    signOut: () => void;
}
