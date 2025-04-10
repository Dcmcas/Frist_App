import { Stack } from 'expo-router';

const RootLayout = () => {
    return (
        <Stack 
            screenOptions={{
                headerShadowVisible: false,
                headerShown: false,
                statusBarStyle: 'auto'
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Inicio'
                }}
            />
        </Stack>
    );
}

export default RootLayout;