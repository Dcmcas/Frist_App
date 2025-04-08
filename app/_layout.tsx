import { Slot } from 'expo-router';

import { AuthProvider } from '@context/auth';

const AppLayout = () => {
    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
}

export default AppLayout;