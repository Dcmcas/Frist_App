import { Slot } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { AuthProvider } from '@context/auth';
import { useAuth } from '@hooks/auth';
import { colors } from '@styles/theme';

function AppContent() {
    const { isAuthLoading } = useAuth();
    if (isAuthLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}>
                <ActivityIndicator size="large" color={colors.red} />
            </View>
        );
    }
    return <Slot />;
}

const AppLayout = () => {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default AppLayout;