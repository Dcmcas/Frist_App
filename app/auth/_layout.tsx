import { Stack } from "expo-router";

import { colors } from "@styles/theme";

const AuthLayout = () => {
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
