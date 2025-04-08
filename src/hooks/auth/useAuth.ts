import { useContext } from 'react';

import { AuthContext } from '@context/auth';

import { AuthContextProps } from '@interfaces/auth';

const useAuth = (): AuthContextProps => {
    return useContext(AuthContext);
}

export default useAuth;