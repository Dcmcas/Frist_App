import { Stack } from 'expo-router';

const RootLayout = () => {
    return (
        <Stack 
            screenOptions={{
                headerShadowVisible: false,
                statusBarStyle: 'dark'
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