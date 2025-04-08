import { createContext } from 'react';

import { AuthContextProps } from '@interfaces/auth';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
export default AuthContext;