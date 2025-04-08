import { AuthState, AuthAction } from '@interfaces/auth';

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case '[Auth] - Clear state':
            return {
                ...state,
                isAuthenticated: false,
                isAuthLoading: false,
                user: null
            }

        case '[Auth] - Set isAuthLoading': 
            return {
                ...state,
                isAuthLoading: action.payload.isAuthLoading
            }

        case '[Auth] - Set isAuthenticated':
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated
            }

        case '[Auth] - Set user':
            return {
                ...state,
                user: action.payload.user
            }

        default:
            return state;
    }
}

export default authReducer;
