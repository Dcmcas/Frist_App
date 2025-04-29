import { Redirect, Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';

import { useAuth } from "@hooks/auth";

import { colors, fontSizes } from "@styles/theme";

const TabsLayout = () => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) return (<Redirect href="/auth/login" />);

    return (
        <Tabs
            screenOptions={{
                headerShadowVisible: false,
                tabBarStyle: {
                    borderWidth: 0,
                    elevation: 0,
                    height: 64
                },
                
                tabBarActiveTintColor: colors.red,
                tabBarInactiveTintColor: colors.gray,
                tabBarLabelStyle: {
                    fontSize: fontSizes.sm - 2
                    
                },
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Inicio',
                    headerShown: true,
                    headerTitle: 'Inicio',
                    headerRight: () => {
                        const { signOut } = require('@hooks/auth').useAuth();
                        return (
                            <Pressable onPress={signOut} style={{ marginRight: 16 }}>
                                <Ionicons name="log-out-outline" size={24} color={colors.red} />
                            </Pressable>
                        );
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            color={ color }
                            name="home"
                            size={ size }
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name="products"
                options={{
                    title: 'Productos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            color={ color }
                            name="bag-handle"
                            size={ size }
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name="settings"
                options={{
                    title: 'Configuración',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            color={ color }
                            name="settings"
                            size={ size }
                        />
                    )
                }}
            />
        </Tabs>
    );
}

export default TabsLayout;