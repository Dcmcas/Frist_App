import { Redirect, Stack } from "expo-router";

import { useAuth } from "@hooks/auth";

import { colors } from "@styles/theme";

const AuthLayout = () => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) return (<Redirect href="/(tabs)" />);

    return (
        <Stack
            screenOptions={{
                animation: 'ios_from_right',
                contentStyle: {
                    backgroundColor: colors.white,
                },
                statusBarStyle: 'dark',
                headerShown: false
            }}
        >
            <Stack.Screen 
                name="login"
            />

            <Stack.Screen 
                name="register"
            />
        </Stack>
    );
}

export default AuthLayout;